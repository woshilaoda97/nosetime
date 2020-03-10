import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './index.module.less';

@connect(
  state => state.user
)
class MineIndex extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <header className={styles.header}>
          <figure className = 'avatar'>
            <img src = 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg' alt = ''/>
            <figcaption>
              {/* { this.props } */}
            </figcaption>
          </figure>
        </header>
      </React.Fragment>
    )
  }
}

export default MineIndex;