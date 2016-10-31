import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class TestShow extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.params);
  }
  render() {
    return (
      <div>
        传递过来的id是： {this.props.params.id}
      </div>
    )
  }
}

module.exports = connect()(TestShow)
