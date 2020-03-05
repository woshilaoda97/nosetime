import React, { Component } from 'react'
import { withRouter } from 'react-router'

import MyTabBar from 'components/tabbar';
import { RootRouterComp } from '@/router';
import styled from 'styled-components';

const tabbarHeight = '50px'

//显示TabBar的路由白名单
const showTabBarWhiteList = [
  '/home',
  '/discovery',
  '/circle',
  '/mall',
  '/mine'
]

//Container样式
const Container = styled.div`
  height: 100%;
  width: 100%;

  h3 {
    color: red
  }
  .main-container {
    box-sizing: content-box;
    padding-bottom: ${ tabbarHeight }
  }
`
@withRouter
class Layout extends Component {
  
  render() {
    console.log(this.props)
    return (
      <Container>
        <div className = 'main-container'>
          <RootRouterComp/>
        </div>
        {
          showTabBarWhiteList.includes(this.props.location.pathname)
            ? <MyTabBar height = { tabbarHeight }/>
            : null
        }
      </Container>
    )
  }
}

export default Layout;