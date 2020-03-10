import React, { Component } from 'react';
import { Grid } from 'antd-mobile';

import IconFont from 'icon'
import styles from './index.module.less';

const data = [
  {
    icon: <IconFont type = '#icon-like'/>,
    text: '喜好',
  },
  {
    icon: <IconFont type = '#icon-alert'/>,
    text: '提醒',
  },
  {
    icon: <IconFont type = '#icon-mail'/>,
    text: '私信',
  },
  {
    icon: <IconFont type = '#icon-setting'/>,
    text: '设定',
  },
  {
    icon: <IconFont type = '#icon-star'/>,
    text: '愿望单',
  },
  {
    icon: <IconFont type = '#icon-diamond'/>,
    text: '积分商城',
  },
  {
    icon: <IconFont type = '#icon-cart'/>,
    text: '购物车',
  },
  {
    icon: <IconFont type = '#icon-order'/>,
    text: '订单',
  },
]
class MineMain extends Component {
  render() {
    return (
      <div className = { styles.main }>
        <Grid 
          data = { data }
          // activeStyle = { false } 
          columnNum = { 4 } 
        />
      </div>
    )
  }
}
export default MineMain;