import React, { Component } from 'react';
import { List, InputItem, Toast } from 'antd-mobile';
import sha1 from 'sha1';
import { Redirect } from 'react-router';

import { addHandleChange } from '@/HOC';
import { connect } from 'react-redux'
import { registry } from '@/redux/user.redux';
import IconFont from 'icon';
import styles from './index.module.less';

@addHandleChange
@connect(
  state => state.user,
  {
    registry
  }
)

class Login extends Component {
  state = {}

  handleSubmit = () => {
    let { email, user, pwd, repwd } = this.props.state;
    if (!email || !user || !pwd){
      Toast.info('所填信息不能为空', 2);
    }else if (pwd !== repwd){
      Toast.info('两次密码不同', 2);
    }else {
      this.props.registry({
        email,
        user,
        pwd: sha1(pwd)
      });
    }
  }
  //登陆状态提示
  shouldComponentUpdate(nextProps) {
    if (this.props.userInfo !== nextProps.userInfo) {
      if (nextProps.status !== -1) {
        Toast.info(nextProps.msg)
      }
    }
    return true;
  }

  render() {
    console.log(this.props.location);
    return (
      <React.Fragment>
        {
          this.props.status === 1
            ? <Redirect to='/mine/index' />
            : null
        }
        <form>
        <List renderHeader={() => 'nosetime registry page'}>
          <InputItem
            clear
            placeholder="请输入邮箱"
            onChange={v => this.props.handleChange('email', v)}
          >
            <IconFont type='#icon-mail' style = {{ fill: '#eee' }}/>
          </InputItem>

          <InputItem
            clear
            placeholder="请输入用户名"
            onChange={v => this.props.handleChange('user', v)}
          >
            <IconFont type='#icon-login_user' />
          </InputItem>

          <InputItem
            clear
            type='password'
            placeholder="请输入密码"
            onChange={v => this.props.handleChange('pwd', sha1(v))}
          >
            <IconFont type='#icon-login_pwd' />
          </InputItem>

          <InputItem
            clear
            type='password'
            placeholder="请重复密码"
            onChange={v => this.props.handleChange('repwd', sha1(v))}
          >
            <IconFont type='#icon-login_pwd' />
          </InputItem>
          <List.Item>
            <div
              className={styles.login_btn}
              onClick={this.handleSubmit}
            >
              注册
            </div>
          </List.Item>
        </List>
        </form>
      </React.Fragment>
    )
  }
}

export default Login