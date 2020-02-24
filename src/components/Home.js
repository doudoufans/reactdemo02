import React from 'react';
import axios from 'axios';

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
                
            </div>
        );
    }
}

export default Home;