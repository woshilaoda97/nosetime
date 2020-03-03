import React from 'react'

import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import Loadable from 'react-loadable';
import Loading from 'components/loading'


const Circle = Loadable({
  loader : () => import ('views/circle'),
  loading: Loading
})
const Discovery = Loadable({
  loader : () => import ('views/discovery'),
  loading: Loading
})
const Home = Loadable({
  loader : () => import ('views/home'),
  loading: Loading
})
const Mall = Loadable({
  loader : () => import ('views/mall'),
  loading: Loading
})
const Mine = Loadable({
  loader : () => import ('views/mine'),
  loading: Loading
})
const NotFound = Loadable({
  loader : () => import ('views/notfound'),
  loading: Loading
})


const RootRouterComp = props => {
  return (
    <div>
      <Switch>
        <Redirect from = '/' to = '/home' exact/>
        <Route path = '/home' component = { Home }/>
        <Route path = '/circle' component = { Circle }/>
        <Route path = '/discovery' component = { Discovery }/>
        <Route path = '/mall' component = { Mall }/>
        <Route path = '/mine' component = { Mine }/>
        <Route component = { NotFound }/>
      </Switch>
    </div>
  )
}

export default RootRouterComp;