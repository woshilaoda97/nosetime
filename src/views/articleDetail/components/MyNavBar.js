import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import styles from './index.module.less';
import { withRouter } from 'react-router';

@withRouter
class MyNavBar extends Component {
  render() {
    return (
      <div className = {styles.navbar}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={ this.props.history.goBack }
          rightContent={ <Icon key="1" type="ellipsis" /> }
        >
          NavBar
        </NavBar>
      </div>
    )
  }
}

export default MyNavBar;