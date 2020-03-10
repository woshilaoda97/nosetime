import React, { Component } from 'react'
import styles from './index.module.less';
import { connect } from 'react-redux';

@connect(
  state => state.user
)
class MineHeader extends Component {
  render() {
    return (
      <header className={styles.header}>
        <figure className='avatar'>
          <div>
            <img src='https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg' alt='' />
          </div>
          <figcaption>
            {this.props.userInfo.username}
          </figcaption>
        </figure>
        <nav>
          <li>
            关注
          </li>
          <li>
            粉丝
          </li>
          <li>
            想要
          </li>
          <li>
            闻过
          </li>
          <li>
            拥有
          </li>
        </nav>
      </header>
    )
  }
}

export default MineHeader;