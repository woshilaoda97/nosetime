import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

import { LoginRegistryRouterComp } from '@/router'
import styles from './index.module.less';

class Registry extends Component {
  render() {
    return (
      <main style={{ height: window.screen.height }} className={styles.wrap}>

        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={ this.props.history.goBack }
        />
        <LoginRegistryRouterComp/>
      </main>
    )
  }
}

export default Registry