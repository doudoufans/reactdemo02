import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
 } from "react-router-dom";

import '../style/User.css'
import ShopAdd from './Shop/ShopAdd';
import ShopList from './Shop/ShopList';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='user'>
                <div className='content'>
                    <div className='left'>
                        <Link to="/shop">商户列表</Link>
                        <br />
                        <Link to="/shop/add">添加商户</Link>
                    </div>
                    <div className='right'>
                    <Route exact path={`${this.props.match.url}/`} component={ShopList}/>
                    <Route path={`${this.props.match.url}/add`} component={ShopAdd}/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Shop;