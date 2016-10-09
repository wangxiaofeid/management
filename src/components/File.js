import React, { Component } from 'react'
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
	}
	onChange(){
		console.log(this.refs.file.value)
		this.setState({
			file: this.refs.file.value
		});
	}
	render(){
		return (
			<div className="section-form">
          		<div className="input-file-wrap">
                    <input type="file" className="input-file" ref="file" name="file" onChange={this.onChange}/>
                    <span>上传文件</span>
                </div>
                <div className="form-value">
	                <input type="text" className="upload-file-text-input ant-input" value={ this.state.file } disabled="disabled" />
	                <span className="close" onClick={this.clear}>×</span>
	            </div>
			</div>
		)
	}
}

