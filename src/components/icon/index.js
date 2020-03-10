import React from 'react'
import PropTypes from 'prop-types';

const IconFont = props => {
  //icon的默认样式
  let defaultStyle = { height: '22px', width: '22px', fill: '#888' }
  //如果有传入style则合并覆盖
  let newStyle = props.style
    ? Object.assign(defaultStyle, props.style)
    : defaultStyle
  return (
    <svg className="icon" aria-hidden="true" style = { newStyle }>
      <use xlinkHref = { props.type }></use>
    </svg>
  )
}

//类型检测type只能为有的iconfont名 //style只能为对象
IconFont.propTypes = {
  type: PropTypes.PropTypes.oneOf([
    '#icon-order', 
    '#icon-like',
    '#icon-cart',
    '#icon-mail',
    '#icon-diamond',
    '#icon-alert',
    '#icon-star',
    '#icon-setting',
    '#icon-unselected-message',
    '#icon-selected-message',
    '#icon-unselected-mall',
    '#icon-selected-mall',
    '#icon-unselected-mine',
    '#icon-selected-mine',
    '#icon-unselected-home',
    '#icon-selected-home',
    '#icon-unselected-eye',
    '#icon-selected-eye',
    '#icon-login_pwd',
    '#icon-login_user'
  ]),
  style: PropTypes.object,
}

export default IconFont