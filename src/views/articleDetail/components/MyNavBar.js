import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import styles from './index.module.less';

class MyNavBar extends Component {
  render() {
    return (
      <div className = {styles.navbar}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={ <Icon key="1" type="ellipsis" /> }
        >
          NavBar
        </NavBar>
      </div>
    )
  }
}

export default MyNavBar;