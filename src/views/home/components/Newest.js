import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';

import { connect } from 'react-redux';
import { getList } from '@/redux/article.redux';
import { useBetterScroll } from '@/HOC';
import ArticleCard from 'components/articleCard'
import styles from './newest.module.less'

@connect(
  state => state.article,
  {
    getList
  }
)
@useBetterScroll(
  window.screen.height - 138.5,
  styles.wrap
)
class Newest extends Component {
  state = {
    picList: []
  }

  componentDidMount() {
    this.props.getList();
  }

  static getDerivedStateFromProps(props){
    return {
      picList: props.newestList.slice(0,4)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Carousel
          autoplay
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
      </React.Fragment>
    )
  }
}

export default Newest;