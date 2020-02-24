import React from 'react';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是用户信息'
         };
    }
    render() {
        return (
            <div className='info'> 
            用户信息
                {this.state.msg}
                
            </div>
        );
    }
}

export default Info;