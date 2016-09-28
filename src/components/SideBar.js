import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd';
import _ from 'lodash';
const SubMenu = Menu.SubMenu;
// import { selectMenu, expandMenu } from '../actions/sideBar'

class SideBar extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.routing);
  }

  render() {
    let { menus } = this.props.sideBar;
    return (
      <Menu style={{ width: 200 }}
        mode="inline"
      >
        {
        _.map(menus, (lv1, id1) => {
          if (!lv1.submenu) {
            return (<Menu.Item key={id1}>
                        <Link to={lv1.link}>
                          <span><Icon type={lv1.icon} /><span>{ lv1.display }</span></span>
                        </Link>
                    </Menu.Item>)
          }else{
            return(<SubMenu key={id1} title={<span><Icon type={lv1.icon} /><span>{ lv1.display }</span></span>}>
              {
                _.map(lv1.submenu, (lv2, id2) => {
                  if (!lv2.submenu) {
                    return (<Menu.Item key={ id2 }><Link to={lv2.link}>{ lv2.display }</Link></Menu.Item>)
                  }else{
                    return (<SubMenu key={id2} title={<span>{ lv2.display }</span>}>
                      {
                        _.map(lv2.submenu, (lv3, id3) => {
                          return (<Menu.Item key={ id3 }><Link to={lv3.link}>{ lv3.display }</Link></Menu.Item>)
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
    sideBar: state.sideBar,
    routing: state.routing
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectMenu, expandMenu }, dispatch)
// }

export default connect(mapStateToProps)(SideBar)

