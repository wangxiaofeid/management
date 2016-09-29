import React, { Component } from 'react'

class Other2 extends Component {
  render() {
    return (
    	<div>
        这里是page2，这个得分开打包
        {this.props.children}
    	</div>
    )
  }
}

module.exports = Other2
