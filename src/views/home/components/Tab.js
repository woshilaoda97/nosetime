import React, { Component } from 'react'
import { Tabs } from 'antd-mobile';
import styles from './tab.module.less'

import Newest from './Newest';
import Special from './Special'
import Nose from './Nose'
import Knowledge from './Knowledge'

const tabs = [
  { title: '最新' },
  { title: '专题' },
  { title: '寻味' },
  { title: '知识' },
];


class Tab extends Component {
  state = {
    index: 0,
  }

  handleOnChange(index) {
    //如果tab在最新则传入index用于控制newest组件中轮播图是否自动播放
    this.setState({
      index
    })
  }

  render() {
    return (
      <div className = { styles.wrap }>
        <Tabs tabs={ tabs }
          initialPage={ 0 }
          swipeable = { false }
          onChange={(tab, index) => { this.handleOnChange(index) }}
        >
          <Newest tabIndex = { this.state.index }/>
          <Special/>          
          <Nose/>
          <Knowledge/>
        </Tabs>
      </div>
    )
  }
}

export default Tab;