import React, { Component } from 'react';

import MineHeader from './header';
import MineMain from './main';

class MineIndex extends Component {
  render() {
    return (
      <React.Fragment>
        <MineHeader/>
        <MineMain/>
      </React.Fragment>
    )
  }
}

export default MineIndex;