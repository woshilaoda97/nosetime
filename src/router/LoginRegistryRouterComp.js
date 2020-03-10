import React from 'react'

import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import Loadable from 'react-loadable';
import Loading from 'components/loading'

const Login = Loadable({
  loader : () => import ('views/loginRegistry/components/Login'),
  loading: Loading
})
const Registry = Loadable({
  loader : () => import ('views/loginRegistry/components/Registry'),
  loading: Loading
})

const LoginRegistryRouterComp = props => {
  return (
    <React.Fragment>
      <Switch>
        <Redirect from = '/mine/lr/' to = '/mine/lr/login' exact/>
        <Route path = '/mine/lr/login' component = { Login }/>
        <Route path = '/mine/lr/registry' component = { Registry }/>
      </Switch>
    </React.Fragment>
  )
}

export default LoginRegistryRouterComp;