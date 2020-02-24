import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import Home from './components/Home';
import User from './components/User';
import Shop from './components/Shop';
import './App.css';
const { Header, Sider, Content } = Layout;

const routes = [
  {
    path: "/",
    component: Home,
    exact:true
  },
  {
    path: "/shop",
    component: Shop,
  }, {
    path: "/user",
    component: User,
  }
];

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
render(){
  return (  
    <Router>
    <div className='App'>
    <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span><Link to="/">首页</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span><Link to="/user">用户</Link></span>

            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span><Link to="/shop">商户</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
              <Route exact path="/" component={Home}/>
              <Route path="/user" component={User}/>
              <Route path="/shop" component={Shop}/>

          </Content>
        </Layout>
      </Layout>    
    </div>
  </Router>
  );
}

}

  
export default App;
