import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile';
import styles from './search.module.less';

class Search extends Component {
  render() {
    console.log(styles.wrap)
    return (
      <div className = {styles.wrap}>
        <SearchBar placeholder="Search" maxLength={8} />
      </div>
    );
  }
}

export default Search;