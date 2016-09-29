import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import 'nprogress/nprogress.css'
import nprogress from 'nprogress'

import { Button, Table } from 'antd'
import { otherAdd, otherSub } from '../actions/other'

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  render: (text, record) => <Link to={'/test/' + record.key}>{text}</Link>
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '住址',
  dataIndex: 'address'
}];
const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '4',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '5',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '6',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '7',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}];

// 通过 rowSelection 对象表明需要行选择
const rowSelection = {
  onChange(selectedRowKeys, selectedRows) {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll(selected, selectedRows, changeRows) {
    console.log(selected, selectedRows, changeRows);
  }
};

class Other extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  goPage(){
    window.location.href='https://www.baidu.com'
  }

  otherStart(){
    nprogress.start();
  }

  otherEnd(){
    nprogress.done();
    nprogress.remove();
  }

  render() {
    return (
    	<div>
        {this.props.other}

        <Button onClick={this.props.otherAdd}>增加</Button>

        <Button onClick={this.props.otherSub}>减少</Button>
        
        <Link to={'/null'}>404页面</Link>

        <Link to={'/test2/wangxiaofei'}>test2/wangxiaofei</Link>

        <Button onClick={this.goPage}>跳转页面</Button>

        <Button onClick={this.otherStart}>开始</Button>

        <Button onClick={this.otherEnd}>结束</Button>

        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
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
