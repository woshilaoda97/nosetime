import React, { Component } from 'react'
import BScroll from 'better-scroll'

import { connect } from 'react-redux';
import { getNoseList } from '@/redux/article.redux';

import ArticleCard from 'components/articleCard'
@connect(
  state => state.article,
  {
    getNoseList
  }
)
class Nose extends Component {
  componentDidMount() {
    this.props.getNoseList();
    
    const wrapper = document.querySelector('.wrap2');
    const scroll = new BScroll(wrapper, {
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: true, //关闭竖向滚动
    })
  }

  render() {
    let wrapHeight = window.screen.height - 138.5;
    return (
      <div className = 'wrap2' style = {{height: wrapHeight}}>
        <div className = 'content'>
          {this.props.noseList.map(val => (
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

export default Nose;