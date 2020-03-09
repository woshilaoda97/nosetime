import React, { Component } from 'react';
import { CookieUtil } from 'utils';
import { Redirect } from 'react-router';
import { MineRouterComp } from '@/router'

class Mine extends Component {
  mineCompRender() {
    return <p>mine</p>
  }
//验证token是否跳转登录页
  checkToken( MineComp ) {
    const token = CookieUtil.get('token');
    return token
      ? <MineComp/>
      : <Redirect to = '/mine/login'/>;
  }

  render() {
    return (
      <div>
        { this.checkToken( this.mineCompRender ) }
        { <MineRouterComp/> }
      </div>
    )
  }
}


export default Mine;
