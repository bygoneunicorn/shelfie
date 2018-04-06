import React, {Component} from 'react';
import axios from 'axios';
import './Form.css'

export default class Form extends Component{
    constructor(){
        super()
        this.state = {
            image_url: '',
            name: '',
            price: ''
        }
        this.handleImageUrl = this.handleImageUrl.bind( this );
        this.handleProduct = this.handleProduct.bind( this );
        this.handlePrice = this.handlePrice.bind( this );
        this.handleAdd = this.handleAdd.bind( this );
        this.handleCancel = this.handleCancel.bind( this );
    }
    handleImageUrl(val){
        this.setState({
            image_url: val
        })
    }
    handleProduct(val){
        this.setState({
            name: val
        })
    }
    handlePrice(val){
        this.setState({
            price: val
        })
    }
    handleAdd(){
        const {name, price, image_url} = this.state
        console.log(name)
        console.log(price)
        console.log(image_url)
        axios.post('http://localhost:4000/api/product', {name, price, image_url}).then(res =>{
            this.handleCancel();
        })
        this.props.updateList()
    }
    handleCancel(){
        this.setState({
            image_url: '',
            name: '',
            price: ''
        })
    }
    render(){
        return(
            <div className="form">
                <p>Image URL:</p>
                <input value={this.state.image_url} onChange={e => this.handleImageUrl(e.target.value)}/>
                <p>Product Name:</p>
                <input value={this.state.name} onChange={e => this.handleProduct(e.target.value)} />
                <p>Price:</p>
                <input value={this.state.price}  onChange={e => this.handlePrice(e.target.value)} /><br />
                <button onClick={this.handleAdd}>Add to Inventory</button>
                <button onClick={this.handleCancel}>Cancel</button>
            </div>
        )
    }
}