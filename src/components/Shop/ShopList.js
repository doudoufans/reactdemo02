import React from 'react';

class ShopList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是商品列表'
         };
    }
    render() {
        return (
            <div className='info'> 
            商品列表
                {this.state.msg}
                
            </div>
        );
    }
}

export default ShopList;