import React, {Component} from 'react'
import { Dropdown, Menu, Icon} from 'antd'

import yeomanImage from '../images/yeoman.png'

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" href="http://www.alipay.com/">退出登录</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="http://www.taobao.com/">个人中心</a>
    </Menu.Item>
  </Menu>
);

export default class FooterBar extends Component{
	render(){
		return (
			<div className="ant-layout-header">
          		<div className="ant-layout-wrapper">
					<div className="ant-layout-logo"><img src={yeomanImage} alt="logo" /></div>
					<div className="ant-layout-login">
						<Dropdown overlay={menu}>
						    <a className="ant-dropdown-link" href="#">
						      <Icon type="user" style={{fontSize:'18px'}}/>某某用户
						    </a>
						</Dropdown>
					</div>
				</div>
			</div>
		)
	}
}

