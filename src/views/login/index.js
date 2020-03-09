import React, { Component } from 'react';
import { List, InputItem, Toast } from 'antd-mobile';
import { addHandleChange } from '@/HOC';
import { Redirect } from 'react-router';
import sha1 from 'sha1';
import { connect } from 'react-redux'
import { login } from '@/redux/user.redux';

@addHandleChange
@connect(
  state => state.user,
  {
    login
  }
)

class Login extends Component {
  state = {}

  handleSubmit = () => {
    let { user, pwd } = this.props.state;
    if (user && pwd){
      this.props.login({
        user, 
        pwd: sha1(pwd)
      });
    }else {
      Toast.info('用户名密码不能为空', 2);
    }
  }
  //登陆状态提示
  shouldComponentUpdate(nextProps) {
    if(this.props.userInfo !== nextProps.userInfo) {
      if(nextProps.status !== -1){
        Toast.info(nextProps.msg)
      }
    }
    return true;
  }
  
  render() {
    return (
      <div>
        { 
          this.props.status === 1
            ? <Redirect to = '/mine'/>
            : null
        }

        <List renderHeader={() => 'Customize to focus'}>

          <InputItem
            clear
            placeholder="请输入用户名"
            onChange = { v => this.props.handleChange('user', v) }
          >用户名</InputItem>

          <InputItem
            clear
            type = 'password'
            placeholder="请输入密码"
            onChange = { v => this.props.handleChange('pwd', sha1(v)) }
          >密码</InputItem>

          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={ this.handleSubmit }
            >
              登陆
            </div>
          </List.Item>
        </List>
      </div>
    )
  }
}

export default Login