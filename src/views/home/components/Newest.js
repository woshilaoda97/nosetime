import React, { Component } from 'react'
import BScroll from 'better-scroll'
import { Carousel } from 'antd-mobile';

import { connect } from 'react-redux';
import { getList } from '@/redux/article.redux';

import ArticleCard from 'components/articleCard'

import styles from './newest.module.less'
@connect(
  state => state.article,
  {
    getList
  }
)
class Newest extends Component {
  state = {
    picList: []
  }

  componentDidMount() {
    this.props.getList();
    
    const wrapper = document.querySelector('.'+styles.wrap);
    const scroll = new BScroll(wrapper, {
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: true, //关闭竖向滚动
    })
    scroll.on('scroll', function (obj) {
      console.log(obj);
  })
  }

  static getDerivedStateFromProps(props){
    return {
      picList: props.newestList.slice(0,4)
    }
  }

  render() {
    let wrapHeight = window.screen.height - 138.5;
    return (
      <div className = { styles.wrap } style = {{height: wrapHeight}}>
        <div className = 'content'>
          <Carousel
            autoplay={this.props.tabIndex === 0}
            infinite
          >
            {this.state.picList.map(val => (
              <ArticleCard 
                key = { val.id }
                id = { val.id }
                title  = { val.title }
                author = { val.author }
                cover  = { val.cover }
              />
            ))}
          </Carousel>
          <h1>最新文章</h1>
          {this.props.newestList.map(val => (
            <ArticleCard 
              key = { val.id }
              id = { val.id }
              title  = { val.title }
              author = { val.author }
              cover  = { val.cover }
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Newest;