import React, { Component } from 'react';
import { connect } from 'react-redux'

import { cookieUtil } from 'utils';
import { getUserById } from '@/redux/user.redux';



const autoLogin = WrappedComp => {
  @connect(
    state => state.user,
    {
      getUserById
    }
  )
  class Comp extends Component {
    componentDidMount() {
      console.log(this.props.userInfo.id);
      let token = cookieUtil.get('token');
      let id = cookieUtil.get('userid');
      console.log(id)
      if (token && id) {
        this.props.getUserById(id);
      }
    }
    render() {
      return (
        <div>
          <WrappedComp {...this.props} />
        </div>
      )
    }
  }
  return Comp;
}

export default autoLogin;