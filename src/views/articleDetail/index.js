import React, { Component } from 'react';
import { getArticleDetail } from '@/redux/article.redux';
import { connect } from 'react-redux';

import ArticleCard from 'components/articleCard';
import styles from './index.module.less';

@connect(
  state => state.article.detail,
  {
    getArticleDetail
  }
)

class ArticleDetail extends Component {
  //显示内容
  createContent(content) {
    let result = `<p>${content}</p>`;
    result = result.replace(/http.*?\.(jpg|jpeg|gif|png)/g, res => {
      return `</p><img src = '${res}' alt = ''/><p>`
    })
    console.log(result);
    return {__html: result};
  }

  componentDidMount() {
    const id = this.props.location.search.slice(1);
    this.props.getArticleDetail(id);
  }

  render() {
    this.createContent(this.props.content)
    return (
      <div className = {styles.wrap}>
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

export default ArticleDetail;