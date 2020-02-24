import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是个人中心'    
     };
    }
    render() {
        return (
            <div className='main'> 
             个人中心
                {this.state.msg}
            </div>
        );
    }
}

export default Main;