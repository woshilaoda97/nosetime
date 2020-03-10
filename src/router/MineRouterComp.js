import React from 'react'
import { cookieUtil } from 'utils';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Loadable from 'react-loadable';
import Loading from 'components/loading'

const NotFound = Loadable({
  loader : () => import ('views/notfound'),
  loading: Loading
})
const LoginRegistry = Loadable({
  loader : () => import ('views/loginRegistry'),
  loading: Loading
})
const Mine = Loadable({
  loader : () => import ('views/mine/components'),
  loading: Loading
})

function checkToken() {
  const token = cookieUtil.get('token');
  return token
    ? <Redirect from = '/mine/' to = '/mine/index' exact/>
    : <Redirect from = '/mine/' to = '/mine/lr' exact/>;
}

const MineRouterComp = props => {
  return (
    <React.Fragment>
      <Switch>
        {
          checkToken()
        }
        {/* <Redirect from = '/mine/' to= '/mine/index' exact/> */}
        <Route path = '/mine/index' component = { Mine }/>
        <Route path = '/mine/lr' component = { LoginRegistry }/>
        <Route component = { NotFound }/>
      </Switch>
    </React.Fragment>
  )
}

export default MineRouterComp;