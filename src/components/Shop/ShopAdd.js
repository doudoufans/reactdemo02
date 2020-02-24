import React from 'react';

class ShopAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是商品添加'
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

export default ShopAdd;