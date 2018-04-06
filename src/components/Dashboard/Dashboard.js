import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product'
import './Dashboard.css'

export default class Dashboard extends Component{

    deleteProduct(id){
        console.log(id)
        axios.delete(`/api/product/:${id}`).then(res => {

        })
    }

    render(){
        const productsList = this.props.inventory.map((product,i) => {
            return(
                <div key={i}>
                    <Product inventory={product}/>
                    <button>Edit</button>
                    <button onClick={this.deleteProduct(product.product_id)}>Delete</button>
                </div>
            )
        })
        return(
            <div className="Dashboard">
                <div>{productsList}</div>

            </div>
        )
    }
}