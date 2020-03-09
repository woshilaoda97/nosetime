import React, { Component } from 'react'

import { connect } from 'react-redux';
import { getNoseList } from '@/redux/article.redux';
import { useBetterScroll } from '@/HOC';
import ArticleCard from 'components/articleCard'
@connect(
  state => state.article,
  {
    getNoseList
  }
)
@useBetterScroll(
  window.screen.height - 138.5,
  'warp2'
)
class Nose extends Component {
  componentDidMount() {
    this.props.getNoseList();
  }

  render() {
    return (
      <div>
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
    )
  }
}

export default Nose;