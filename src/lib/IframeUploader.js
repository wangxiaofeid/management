
const IFRAME_STYLE = {
  position: 'absolute',
  top: 0,
  opacity: 0,
  filter: 'alpha(opacity=0)',
  left: 0,
  zIndex: 9999,
};

function empty(){}
const defaultProp = {
  action: '',
  component: 'span',
  prefixCls: 'rc-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onProgress: empty,
  onReady: empty,
  onStart: empty,
  onError: empty,
  onSuccess: empty,
  multiple: false,
  beforeUpload: null,
  withCredentials: false,
}

function IframeUploader(setting){
  this.uploading = false;

  this.props = Object.assign({}, defaultProp, setting);

  var body = document.getElementsByTagName('body')[0];
  this.iframe = document.createElement('iframe');

  this.iframe.onload = this.onLoad.bind(this);

  this.iframe.setAttribute('id', this.uid());

  body.appendChild(this.iframe);

  this.initIframe();
}

IframeUploader.prototype = {

  uid: function(){
    var now = (new Date()).getTime();
    var random = parseInt(Math.random()*100000)
    return `rc-upload-${now}-${random}`;
  },

  onLoad: function(){
    if (!this.uploading) {
      return;
    }
    const { props, file } = this;
    let response;
    try {
      const doc = this.getIframeDocument();
      const script = doc.getElementsByTagName('script')[0];
      if (script && script.parentNode === doc.body) {
        doc.body.removeChild(script);
      }
      response = doc.body.innerHTML;
      props.onSuccess(response, file);
    } catch (err) {
      console.error(false, 'cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload');
      response = 'cross-domain';
      props.onError(err, null, file);
    }
    this.endUpload();
  },

  onChange() {
    const target = this.getFormInputNode();
    // ie8/9 don't support FileList Object
    // http://stackoverflow.com/questions/12830058/ie8-input-type-file-get-files
    const file = this.file = {
      uid: this.getUid(),
      name: target.value,
    };
    this.startUpload();
    const { props } = this;
    if (!props.beforeUpload) {
      return this.post(file);
    }
    const before = props.beforeUpload(file);
    if (before && before.then) {
      before.then(() => {
        this.post(file);
      }, () => {
        this.endUpload();
      });
    } else if (before !== false) {
      this.post(file);
    } else {
      this.endUpload();
    }
  },

  getIframeNode: function() {
    return this.iframe;
  },

  getIframeDocument: function() {
    return this.getIframeNode().contentDocument;
  },

  getFormNode: function() {
    return this.getIframeDocument().getElementById('form');
  },

  getFormInputNode: function() {
    return this.getIframeDocument().getElementById('input');
  },

  getFormDataNode: function() {
    return this.getIframeDocument().getElementById('data');
  },

  getFileForMultiple: function(file) {
    return this.props.multiple ? [file] : file;
  },

  getIframeHTML: function(domain) {
    let domainScript = '';
    let domainInput = '';
    if (domain) {
      domainScript = `<script>document.domain="${domain}";</script>`;
      domainInput = `<input name="_documentDomain" value="${domain}" />`;
    }
    var otherInput = '';
    for (var n in this.props.data) {
      if (this.props.data.hasOwnProperty(n)) {
        otherInput += '<input type="hidden" name="'+ n +'" value="'+ this.props.data[n] +'">'
      }
    }
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style>
    body,html {padding:0;margin:0;border:0;overflow:hidden;}
    </style>
    ${domainScript}
    </head>
    <body>
    <form method="post"
    encType="multipart/form-data"
    action="${this.props.action}" id="form"
    style="display:block;height:9999px;position:relative;overflow:hidden;">
    <input id="input" type="file"
     name="${this.props.name}"
     style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>
    ${otherInput}
    ${domainInput}
    <span id="data"></span>
    </form>
    </body>
    </html>
    `;
  },

  initIframeSrc: function() {
    if (this.domain) {
      this.getIframeNode().src = `javascript:void((function(){
        var d = document;
        d.open();
        d.domain='${this.domain}';
        d.write('');
        d.close();
      })())`;
    }
  },

  initIframe: function() {
    const iframeNode = this.getIframeNode();
    let win = iframeNode.contentWindow;
    let doc;
    this.domain = this.domain || '';
    this.initIframeSrc();
    try {
      doc = win.document;
    } catch (e) {
      this.domain = document.domain;
      this.initIframeSrc();
      win = iframeNode.contentWindow;
      doc = win.document;
    }
    doc.open('text/html', 'replace');
    doc.write(this.getIframeHTML(this.domain));
    doc.close();
    this.getFormInputNode().onchange = this.onChange;
  },

  endUpload: function() {
    if (this.uploading) {
      this.file = {};
      // hack avoid batch
      this.uploading = false;
      this.initIframe();
    }
  },

  startUpload: function() {
    if (!this.uploading) {
      this.uploading = true;
    }
  },

  abort: function(file) {
    if (file) {
      let uid = file;
      if (file && file.uid) {
        uid = file.uid;
      }
      if (uid === this.file.uid) {
        this.endUpload();
      }
    } else {
      this.endUpload();
    }
  },

  post: function(file) {
    const formNode = this.getFormNode();
    const dataSpan = this.getFormDataNode();
    let { data } = this.props;
    const { onStart } = this.props;
    if (typeof data === 'function') {
      data = data(file);
    }
    const inputs = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        inputs.push(`<input name="${key}" value="${data[key]}"/>`);
      }
    }
    dataSpan.innerHTML = inputs.join('');
    formNode.submit();
    dataSpan.innerHTML = '';
    onStart(file);
  }
}


export default IframeUploader