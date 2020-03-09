import React, { Component } from 'react';
import MyNavBar from './components/MyNavBar';
import DetailContent from './components/DetailContent'


class ArticleDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <MyNavBar/>
        <DetailContent/>
      </React.Fragment>
    )
  }
}

export default ArticleDetail;