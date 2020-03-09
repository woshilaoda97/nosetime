import React, { Component } from 'react'
//为组件提供更改输入框的handleChange方法
const addHandleChange = WrappedComp => {
  
  return class Comp extends Component {
    constructor(props){
      super(props)
      this.state = {}
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(key, value) {
      console.log(key, value);
      this.setState({
        [key]: value
      })
    }
    render() {
      return (
        <WrappedComp state = { this.state } { ...this.props } handleChange = { this.handleChange }/>
      )
    }
  }

}

export default addHandleChange;