import React, { Component } from 'react'

import { connect } from 'react-redux';
import { getKnowledgeList } from '@/redux/article.redux';
import { useBetterScroll } from '@/HOC';
import ArticleCard from 'components/articleCard'

@connect(
  state => state.article,
  {
    getKnowledgeList
  }
)
@useBetterScroll(
  window.screen.height - 138.5,
  'wrap'
)
class Knowledge extends Component {
  componentDidMount() {
    this.props.getKnowledgeList();
  }

  render() {
    return (
      <div>
        {this.props.knowledgeList.map(val => (
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

export default Knowledge;