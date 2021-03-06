import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
 
import { Form, Input, Button, Checkbox, Cascader, DatePicker, InputNumber, Radio, Rate, Switch, Upload , Icon} from 'antd';
const FormItem = Form.Item;

import ajaxUploader from '../lib/ajaxUploader'
import File from '../components/File'


const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      code: 752100,
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      code: 453400,
    }],
  }],
}];


class TestFile2 extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.props.form.setFieldsValue({
    //   userName: 'wxf'
    // });
    this.state = {
      file: ''
    }
    fetch('/user/getAll');
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Received values of form:', this.props.form.getFieldsValue());

    if(this.state.file){
      ajaxUploader({
        action: 'api/upload',
        filename: 'file',
        file: this.state.file,
        data: this.props.form.getFieldsValue(),
        onSuccess: function(response, file){ console.log(response);},
        onError: function(error){ console.log(error) }
      });
    }
  }

  upload(arg){
    console.log(arg);
    return false;
  }

  onChange(file){
    this.setState({
      file: file
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ width: '400px'}}>
        { this.props.other }
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormItem
            label="Account"
          >
            {getFieldDecorator('userName', {'initialValue': 'wxf'})(
              <Input placeholder="Please input the account" />
            )}
          </FormItem>
          <FormItem
            label="Password"
          >
            {getFieldDecorator('password')(
              <Input type="password" placeholder="Please input the password" />
            )}
          </FormItem>

          <FormItem label="级联选择">
            {getFieldDecorator('cascader', {'initialValue': ['zhejiang', 'hangzhou', 'xihu']})(
            <Cascader
              options={options}
              changeOnSelect
              style={{ width: 200 }}
            />
            )}
          </FormItem>
          <FormItem label="日期选择">
            {getFieldDecorator('datePicker', {'initialValue': moment(new Date())})(
            <DatePicker
              showTime
              style={{ width: 200 }}
              format="YYYY-MM-DD HH:mm:ss"
            />
            )}
          </FormItem>
          <FormItem label="数字输入框">
            {getFieldDecorator('inputNumber', {'initialValue': this.props.other})(
              <InputNumber min={1} max={10}/>
            )}
          </FormItem>
          <FormItem label="单选框组">
            {getFieldDecorator('radioGroup', {'initialValue': 2})(
              <Radio.Group>
                <Radio key="a" value={1}>A</Radio>
                <Radio key="b" value={2}>B</Radio>
                <Radio key="c" value={3}>C</Radio>
                <Radio key="d" value={4}>D</Radio>
              </Radio.Group>
            )}
          </FormItem>
          <FormItem label="评论">
            {getFieldDecorator('rate', {'initialValue': 1.5})(
              <Rate allowHalf/>
            )}
          </FormItem>
          <FormItem label="开关">
            {getFieldDecorator('switch', {'initialValue': false})(
              <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('agreement', {'initialValue': true})(
              <Checkbox defaultChecked>Remember me</Checkbox>
            )}
          </FormItem>
          <FormItem>
            <File onChange={this.onChange}></File>
          </FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    other: state.other
  }
}

const formCreate = {
  mapPropsToFields: function(props){

  }
}

module.exports = connect(mapStateToProps)(Form.create()(TestFile2))