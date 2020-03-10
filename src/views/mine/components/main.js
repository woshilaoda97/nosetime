import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import { withRouter } from 'react-router';

import IconFont from 'icon'
import styles from './index.module.less';

const data = [
  {
    icon: <IconFont type = '#icon-like'/>,
    text: '喜好',
    path: 'like'
  },
  {
    icon: <IconFont type = '#icon-alert'/>,
    text: '提醒',
    path: 'alert'
  },
  {
    icon: <IconFont type = '#icon-mail'/>,
    text: '私信',
    path: 'message'
  },
  {
    icon: <IconFont type = '#icon-setting'/>,
    text: '设定',
    path: 'setting'
  },
  {
    icon: <IconFont type = '#icon-star'/>,
    text: '愿望单',
    path: 'want'
  },
  {
    icon: <IconFont type = '#icon-diamond'/>,
    text: '积分商城',
    path: 'score'
  },
  {
    icon: <IconFont type = '#icon-cart'/>,
    text: '购物车',
    path: 'cart'
  },
  {
    icon: <IconFont type = '#icon-order'/>,
    text: '订单',
    path: 'order'
  },
]

@withRouter
class MineMain extends Component {
  handleClick = (e) => {
    let { path } = e;
    path = '/mine/' + path;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className = { styles.main }>
        <Grid 
          data = { data }
          onClick = { this.handleClick }
          columnNum = { 4 } 
        />
      </div>
    )
  }
}
export default MineMain;