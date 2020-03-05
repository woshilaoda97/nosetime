import React, { Component } from 'react';

import Search from './components/Search';
import Tab from './components/Tab'

import styled from 'styled-components';

const Container = styled.div`
  header {
    position: absolute;
    top: 0;
  }
`

class Home extends Component {
  render() {
    return (
      <Container>
        <Search/>
        <Tab/>
      </Container>
    )
  }
}


export default Home;
