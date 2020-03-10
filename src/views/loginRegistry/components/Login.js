import React, { Component } from 'react'
import sha1 from 'sha1';
import { Redirect } from 'react-router';
import { List, InputItem, Toast, Button } from 'antd-mobile';

import IconFont from 'icon';
import { addHandleChange } from '@/HOC';
import { connect } from 'react-redux'
import { login } from '@/redux/user.redux';
import styles from './index.module.less';

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
    if (user && pwd) {
      this.props.login({
        user,
        pwd: sha1(pwd)
      });
    } else {
      Toast.info('用户名密码不能为空', 2);
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
    return (
      <React.Fragment>
        {
          this.props.status === 1
            ? <Redirect to='/mine/index' />
            : null
        }
        <form>
        <List renderHeader={() => 'nosetime login page'}>
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
          <List.Item>
            <div
              className={styles.login_btn}
              onClick={this.handleSubmit}
            >
              登陆
            </div>
          </List.Item>
        </List>

        <Button
          type="ghost"
          inline
          size="small"
          onClick={
            () => this.props.history.push('/mine/lr/registry')
          }
        >
          点击跳转注册页
        </Button>
        </form>
      </React.Fragment>
    )
  }
}

export default Login;