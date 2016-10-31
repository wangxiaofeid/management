import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import 'styles/NoMatch.css'

class NoMatch extends Component {
  render() {
    return (
    	<div className="container_404">
	      <div className="container_1"><img src="images/404.png" /></div>
	      <div className="container_2"><img src="images/3.22.gif" /></div>
	      <div className="container_3">
	        <div className="container_3_1"><span>SORRY你要访问的页面弄丢了</span></div>
	        <div className="container_3_2">
	         	<Link to={'/'}>返回首页</Link>
        	</div>
	      </div>
	    </div>
    )
  }
}

module.exports = connect()(NoMatch)
