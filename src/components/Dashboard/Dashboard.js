import React, {Component} from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component{

    render(){
        const productsList = this.props.inventory.map((product,i) => {
            return(
                <div key={i}>
                    <Product inventory={product}/>
                </div>
            )
        })
        return(
            <div>
                {productsList}
            </div>
        )
    }
}