import React, { Component } from 'react';
import { cookieUtil } from 'utils';
import { Redirect } from 'react-router';
import { MineRouterComp } from '@/router';

class Mine extends Component {
//验证token是否跳转登录页
  checkToken() {
    const token = cookieUtil.get('token');
    return token
      ? <Redirect to = '/mine/index'/>
      : <Redirect to = '/mine/login'/>;
  }

  render() {
    return (
      <div>
        { this.checkToken() }
        { <MineRouterComp/> }
      </div>
    )
  }
}


export default Mine;
