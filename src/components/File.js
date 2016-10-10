import React, { Component, PropTypes } from 'react'
import { Button, Icon} from 'antd'
import '../styles/File.css'

export default class File extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	file: ''
	    }

	    this.clear = this.clear.bind(this);
	    this.onChange = this.onChange.bind(this);
	}

	clear(){
		this.setState({
			file: ''
		});
		this.refs.file.value = '';
		this.props.onChange('');
	}
	onChange(){
		console.log(this.refs.file.files)
		this.setState({
			file: this.refs.file.value
		});
		this.props.onChange(Array.prototype.slice.call(this.refs.file.files)[0]);
	}
	render(){
		var style1 = {display: 'none'}, style2 = {display: 'none'};
		if(this.state.file){
			style2 = {display: 'block'}
		}else{
			style1 = {display: 'inline-block'}
		}
		return (
			<div className="section-form">
          		<div className="input-file-wrap" style={ style1 }>
			        { this.props.children||<Button type="ghost"><Icon type="upload" /> upload</Button> }
			        <input type="file" className="input-file" ref="file" name="file" onChange={this.onChange}/>
                </div>
                <div className="form-value" style={ style2 }>
	                <input type="text" className="upload-file-text-input ant-input" value={ this.state.file } disabled="disabled" />
	                <span className="close" title="取消" onClick={this.clear}>×</span>
	            </div>
			</div>
		)
	}
}

File.propTypes = {
    onChange: PropTypes.func
}
File.defaultProps = {
  onChange: function(){
  	console.log('onChange is null')
  }
};

