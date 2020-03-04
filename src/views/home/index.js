import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList } from '@/redux/article.redux';

import Search from './components/Search';
import Tab from './components/Tab'

@connect(
  state=>state.article,
  {
    getList
  }
)

class Home extends Component {
  componentDidMount() {
    this.props.getList();
  }
  render() {
    return (
      <div>
        <Search/>
        <Tab/>
      </div>
    )
  }
}


export default Home;
