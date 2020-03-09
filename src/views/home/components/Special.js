import React, { Component } from 'react'

import { connect } from 'react-redux';
import { getSpecialList } from '@/redux/article.redux';
import { useBetterScroll } from '@/HOC';
import ArticleCard from 'components/articleCard'

@connect(
  state => state.article,
  {
    getSpecialList
  }
)
@useBetterScroll(
  window.screen.height - 138.5,
  'warp1'
)
class Special extends Component {
  componentDidMount() {
    this.props.getSpecialList();
  }

  render() {
    return (
      <div>
        {this.props.specialList.map(val => (
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

export default Special;