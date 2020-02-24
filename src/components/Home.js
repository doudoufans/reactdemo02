import React from 'react';
import axios from 'axios';
import { Button } from 'antd';




class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }
    render() {
        return (
            <div className='home'> 
                首页组件
                <Button type="primary">Primary</Button>

                
            </div>
        );
    }
}

export default Home;