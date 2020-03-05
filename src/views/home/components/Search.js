import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile';
import styles from './search.module.less';

class Search extends Component {
  render() {
    return (
      <div className = {styles.wrap}>
        <SearchBar placeholder="搜索香水、品牌、气味、帖子" maxLength={8}/>
      </div>
    );
  }
}

export default Search;