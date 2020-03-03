import React, { Component } from 'react'
import TabBarExample from 'components/tabbar';
import { RootRouterComp } from '@/router';
import styled from 'styled-components';

const tabbarHeight = '50px'

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

export default class index extends Component {
  render() {
    return (
      <Container>
        <div className = 'main-container'>
          <RootRouterComp/>
        </div>
        <TabBarExample height = { tabbarHeight }/>
      </Container>
    )
  }
}
