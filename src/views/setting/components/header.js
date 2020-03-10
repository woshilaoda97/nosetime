import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from 'react-router';

import styles from './index.module.less';

@withRouter
class SettingHeader extends Component {
  render() {
    return (
      <div className = { styles.wrap }>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={ this.props.history.goBack }
        />
        setting
      </div>
    )
  }
}

export default SettingHeader;