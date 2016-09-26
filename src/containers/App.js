import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import FooterBar from '../components/FooterBar'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ant-layout-topaside">
        <div className="ant-layout-header">
          <div className="ant-layout-wrapper">
            <NavBar />
          </div>
        </div>
        <div className="ant-layout-wrapper">
          <div className="ant-layout-container">
            <aside className="ant-layout-sider">
              <SideBar/>
            </aside>
            <div className="ant-layout-content">
              <div style={{ height: 240 }}>
                <div style={{clear: 'both'}}>内容区域</div>
              </div>
            </div>
          </div>
          <FooterBar/>
        </div>
      </div>
    )
  }
}

export default connect()(App)