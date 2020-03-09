import React, { Component } from 'react';
import { List, InputItem } from 'antd-mobile';
import { addHandleChange } from '@/HOC'

@addHandleChange
class Login extends Component {
  // state = {
  //   user:'',
  //   pwd:''
  // }
  render() {
    console.log(this.state)
    return (
      <div>
        <List renderHeader={() => 'Customize to focus'}>
          <InputItem
            clear
            placeholder="请输入用户名"
            onChange = { (e)=>this.props.handleChange('user',e) }
          >用户名</InputItem>
          <InputItem
            clear
            placeholder="请输入密码"
            ref={el => this.inputRef = el}
          >密码</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.handleClick}
            >
              click to focus
            </div>
          </List.Item>
        </List>
      </div>
    )
  }
}

export default Login