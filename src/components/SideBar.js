import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { Link } from 'react-router'
import { Menu, Icon } from 'antd';
import _ from 'lodash';
const SubMenu = Menu.SubMenu;
import { selectMenu, expandMenu } from '../actions/sideBar'

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log('click ', e);
    // this.setState({
    //   current: e.key
    // });
  }

  render() {
    let { menus, selectedKey, openKey } = this.props;
    return (
      <Menu onClick={this.handleClick}
        style={{ width: 200 }}
        selectedKeys={[selectedKey]}
        openKeys={openKey}
        mode="inline"
      >
        {
        _.map(menus, (lv1, id1) => {
          if (!lv1.submenu) {
            return (<Menu.Item key={ id1 }>{ lv1.display }</Menu.Item>)
          }else{
            return(<SubMenu key={id1} title={<span><Icon type={lv1.icon} /><span>{ lv1.display }</span></span>}>
              {
                _.map(lv1.submenu, (lv2, id2) => {
                  if (!lv2.submenu) {
                    return (<Menu.Item key={ id2 }>{ lv2.display }</Menu.Item>)
                  }else{
                    return (<SubMenu key={id2} title={<span><Icon type={lv2.icon} /><span>{ lv2.display }</span></span>}>
                      {
                        _.map(lv2.submenu, (lv3, id3) => {
                          return (<Menu.Item key={ id3 }>{ lv3.display }</Menu.Item>)
                        })
                      }
                    </SubMenu>)
                  }
                })
              }
            </SubMenu>)
          }
        })
        }
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return {
    other: state.sideBar
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectMenu, expandMenu }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)

