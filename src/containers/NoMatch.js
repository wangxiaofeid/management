import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class NoMatch extends Component {
  render() {
    return (
    	<div>
        404
        <Link to={'/'}>返回首页</Link>
        <Link to={'/test'}>返回测试</Link>
    	</div>
    )
  }
}

export default connect()(NoMatch)
