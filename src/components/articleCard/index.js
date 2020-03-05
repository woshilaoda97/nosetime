import React, { Component } from 'react'
import styles from './articleCard.module.less'
import { withRouter } from 'react-router'

@withRouter
class ArticleCard extends Component {
  handleOnClick(id) {
    this.props.history.push('/home/articleDetail?' + id)
  }

  render(){
    return (
      <a
        // onClick = { () => this.handleOnClick(this.props.id) }
        style = {{ display: 'inline-block', width: '100%', height: "219px", position: "relative" }}
        className = { styles.font }
      >
        <header>
          <h4>{this.props.title}</h4>
          <p>{`by ${this.props.author}`}</p>
        </header>
        <img
          src={this.props.cover}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
          onLoad={() => {
            window.dispatchEvent(new Event('resize'));
          }}
        />
      </a>
    )
  }
}

export default ArticleCard;
