import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, Spin } from 'antd'

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

class Other2 extends Component {
	constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      current: 1,
      total: 1000,
      pageSize: 10
    }
  }

  componentDidMount(){
  	this.loadData();
  }

  loadData = (page)=>{
  	var self = this;
  	self.setState({
			loading: true,
			current: (page?page:self.state.current)
		});
  	setTimeout(function(){
  		var data = [];
  		for (var i = 0; i < self.state.pageSize; i++) {
  			var age = parseInt(Math.random()*10000);
  			data.push({
  				key: i,
				  name: '李大嘴'+age,
				  age: age,
				  address: '西湖区湖底公园1号'+age
  			});
  		}
  		self.setState({
  			loading: false,
  			data: data
  		});
  	}, 2000);
  }

  pageOnChange = (page)=>{
    this.loadData(page);
  }

  showSizeChange = (current, pageSize)=>{
    var page = Math.ceil(this.state.current*this.state.pageSize/pageSize);
    this.setState({
    	pageSize: pageSize
    });
    this.loadData(page);
  }

  render() {
  	var pagination = {
  		current: this.state.current,
      total: this.state.total,
      onChange: this.pageOnChange,
      showSizeChanger: true,
      pageSize: this.state.pageSize,
      onShowSizeChange: this.showSizeChange
  	};
    return (
    	<div>
        这里是page2，这个得分开打包
        {this.props.children}
        <Spin spinning={this.state.loading}>
	        <Table
	        	style={{ marginTop: 10}}
	          rowSelection={ rowSelection }
	          columns={ columns }
	          dataSource={ this.state.data }
	          pagination={ pagination }
	        />
        </Spin>
    	</div>
    )
  }
}

module.exports = Other2
