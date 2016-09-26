
import React, {Component} from 'react'

import yeomanImage from '../images/yeoman.png'

export default class FooterBar extends Component{
	render(){
		return (
			<div className="ant-layout-logo"><img src={yeomanImage} alt="logo" /></div>
		)
	}
}

