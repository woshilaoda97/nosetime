import React, { Component } from 'react';
import { getArticleDetail } from '@/redux/article.redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { useBetterScroll } from '@/HOC';
import ArticleCard from 'components/articleCard';
import styles from './index.module.less';

@withRouter
@connect(
  state => state.article.detail,
  {
    getArticleDetail
  }
)
@useBetterScroll(
  window.screen.height,
  'wrap5'
)
class DetailContent extends Component {
  //显示内容
  createContent(content) {
    let result = `<p>${content}</p>`;
    result = result.replace(/http.*?\.(jpg|jpeg|gif|png)/g, res => {
      return `</p><img src = '${res}' alt = ''/><p>`
    })
    return {__html: result};
  }

  componentDidMount() {
    //获取id发送请求
    const id = this.props.location.search.slice(1);
    this.props.getArticleDetail(id);
  }

  render() {
    return (
      <div className = {styles.content}>
        <ArticleCard
          id = { this.props.id }
          title = { this.props.title }
          author = { this.props.author }
          cover = { this.props.cover }
        />
        <div dangerouslySetInnerHTML = { this.createContent( this.props.content ) } />
      </div>
    )
  }
}

export default DetailContent;