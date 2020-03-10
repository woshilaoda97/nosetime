import React, {Component} from 'react';
import BScroll from 'better-scroll'

const useBetterScroll = (height, cn) => WrappedComp => {
  return class Comp extends Component {
    componentDidMount() {
      const wrapper = document.querySelector('.'+cn);
      const scroll = new BScroll(wrapper, {
        click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
        scrollY: true, //关闭竖向滚动
      })
      scroll.on('scroll', function (obj) {
        console.log(obj);
      })
    }
    render() {
      return(
        <div className = {cn} style={{ height,width:'100%' }}>
          <div className = 'content'>
            <WrappedComp { ...this.props }/>
          </div>
        </div>
      )
    }
  }
}

export default useBetterScroll
