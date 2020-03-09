import React, {Component} from 'react';
import BS from 'better-scroll'

const useBetterScroll = WrappedComp => {
  return class Comp extends Component {
    componentDidMount() {

    }
    render() {
      return(
        <div>
          <WrappedComp { ...props }/>
        </div>
      )
    }
  }
}

export default useBetterScroll
