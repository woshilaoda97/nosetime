import React from 'react'

import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import Loadable from 'react-loadable';
import Loading from 'components/loading'

const NotFound = Loadable({
  loader : () => import ('views/notfound'),
  loading: Loading
})
const Login = Loadable({
  loader : () => import ('views/login'),
  loading: Loading
})
const Mine = Loadable({
  loader : () => import ('views/mine/components'),
  loading: Loading
})


const MineRouterComp = props => {
  return (
    <div>
      <Switch>
        <Route path = '/mine/index' component = { Mine }/>
        <Route path = '/mine/login' component = { Login }/>
        <Route component = { NotFound }/>
      </Switch>
    </div>
  )
}

export default MineRouterComp;