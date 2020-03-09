import React, {Component} from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router';
import IconFont from 'icon';
//底部导航栏列表
const tabList = [
  {
    path: '/home',
    text: '首页',
    icon: '#icon-unselected-home',
    selectedIcon: '#icon-selected-home'
  },
  {
    path: '/discovery',
    text: '发现',
    icon: '#icon-unselected-eye',
    selectedIcon: '#icon-selected-eye',
  },
  {
    path: '/circle',
    text: '圈子',
    icon: '#icon-unselected-message',
    selectedIcon: '#icon-selected-message',
  },
  {
    path: '/mall',
    text: '商城',
    icon: '#icon-unselected-mall',
    selectedIcon: '#icon-selected-mall',
  },
  {
    path: '/mine',
    text: '我的',
    icon: '#icon-unselected-mine',
    selectedIcon: '#icon-selected-mine',
  }
]

const { Item } = TabBar;

@withRouter
class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '/home',
    };
  }

  handleOnPress = path => {
    this.setState({
      selectedTab: path,
    });
    this.props.history.push(path);
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: this.props.height, width: '100%', bottom: 0 }}>
        <TabBar
          unselectedTintColor="#707070"
          tintColor="#9b88d1"
          barTintColor="white"
          hidden={this.state.hidden}
          noRenderContent={true}
        >
          { tabList.map(item => {
            return(
              <Item
                title = { item.text }
                key = { item.path }
                icon = { <IconFont type = { item.icon }/> }
                selectedIcon = { <IconFont type = { item.selectedIcon }/> }
                selected={
                  //当前路径包含渲染路由path则为选中（包含子路由）
                  this.props.location.pathname.includes( item.path )
                }
                onPress={ this.handleOnPress.bind(this,item.path) }
              />
            )
          }) }
        </TabBar>
      </div>
    );
  }
}

export default TabBarExample;