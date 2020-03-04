import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList } from '@/redux/article.redux';

@connect(
  state=>state,
  {
    getList
  }
)
class Home extends Component {
  
  componentDidMount() {
    console.log(this.props);
    this.props.getList()
  }
  render() {
    return (
      <div>
        Homeasd
      </div>
    )
  }
}


export default Home;
