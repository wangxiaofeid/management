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
}, {
  key: '8',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '9',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '10',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '11',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '12',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '13',
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

  pageOnChange = (page)=>{
    console.log(page);
  }

  showSizeChange = (page)=>{
    console.log(page);
  }

  render() {
    var pagination = {
      current: 2,
      total: 1000,
      showSizeChanger: true,
      onChange: this.pageOnChange,
      onShowSizeChange: this.showSizeChange
    }
    return (
    	<div>
        {this.props.other}

        <Button style={{ marginLeft: 10}} onClick={this.props.otherAdd}>增加</Button>

        <Button style={{ marginLeft: 10}} onClick={this.props.otherSub}>减少</Button>
        
        <Link style={{ marginLeft: 10}} to={'/null'}>404页面</Link>

        <Link style={{ marginLeft: 10}} to={'/test2/wangxiaofei'}>test2/wangxiaofei</Link>

        <a style={{ marginLeft: 10}} href="https://www.baidu.com">普通绝对链接</a>
        <a style={{ marginLeft: 10}} href="/null">普通相对链接</a>
        <Button style={{ marginLeft: 10}} onClick={this.goPage}>跳转页面</Button>

        <Button style={{ marginLeft: 10}} onClick={this.otherStart}>开始</Button>

        <Button style={{ marginLeft: 10}} onClick={this.otherEnd}>结束</Button>

        <Table
          style={{ marginTop: 10}}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={ pagination }
        />
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

module.exports = connect(mapStateToProps,mapDispatchToProps)(Other)
