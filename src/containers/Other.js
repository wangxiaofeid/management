import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { otherAdd, otherSub } from '../actions/other'

class Other extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
        {this.props.other}
        <button onClick={this.props.otherAdd}>增加</button>
        <button onClick={this.props.otherSub}>减少</button>
        
        <Link to={'/null'}>404页面</Link>
    	</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    other: state.other
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ otherAdd, otherSub }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Other)
