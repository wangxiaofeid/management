import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cookie from 'react-cookie'

import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import FooterBar from '../components/FooterBar'

import { userUpdata } from '../actions/user'

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    cookie.save('token', 'wangxiaofei', { path: '/' });
    cookie.save('username', 'wangxiaofei', { path: '/' });
    var token = cookie.load('token');
    var username = cookie.load('username');
    if(token){
      this.props.userUpdata({
        token,
        username
      });
    }else{
      // todo login
      window.location.href='https://www.baidu.com'
    }
  }

  render() {
    return (
      <div className="ant-layout-topaside">
        <NavBar />
        <div className="ant-layout-wrapper">
          <div className="ant-layout-container">
            <aside className="ant-layout-sider">
              <SideBar/>
            </aside>
            <div className="ant-layout-content">
              <div style={{clear: 'both'}}>
                { this.props.children }
              </div>
            </div>
          </div>
          <FooterBar/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userUpdata }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)