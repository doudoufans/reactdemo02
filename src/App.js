import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import ShopList from './components/Shop/ShopList';
import ShopAdd from './components/Shop/ShopAdd';

import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Main from './components/User/Main';
import Info from './components/User/Info';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

render(){
  return (  
    <Router>
    <div className='App'>
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="desktop" />
              <span>首页</span>
              <Link to="/">首页</Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户</span>
                </span>
              }
            >
              <Menu.Item key="3"><Link to="/user/main">个人中心</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/user/info">用户信息</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>商品</span>
                </span>
              }
            >
              <Menu.Item key="6"><Link to="/shop/list">商品添加</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/shop/add">商品列表</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
         
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/user/main" component={Main}/>
                <Route path="/user/info" component={Info}/>
                <Route path="/shop/list" component={ShopList}/>
                <Route path="/shop/add" component={ShopAdd}/>
            </Switch> 
            </div>
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>众悦测试团队</Footer>
        </Layout>
      </Layout>
    </div>
  </Router>
  );
}

}

  
export default App;
