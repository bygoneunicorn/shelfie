import React, {Component} from 'react';

export default class Form extends Component{
    constructor(){
        super()
        this.state = {
            imageUrlIn: '',
            productIn: '',
            priceIn: ''
        }
        this.handleImageUrl = this.handleImageUrl.bind( this );
        this.handleProduct = this.handleProduct.bind( this );
        this.handlePrice = this.handlePrice.bind( this );
        this.handleAdd = this.handleAdd.bind( this );
        this.handleCancel = this.handleCancel.bind( this );
    }
    handleImageUrl(val){
        this.setState({
            imageUrlIn: val
        })
        console.log(this.state.imageUrlIn)
    }
    handleProduct(val){
        this.setState({
            productIn: val
        })
    }
    handlePrice(val){
        this.setState({
            priceIn: val
        })
    }
    handleAdd(){

    }
    handleCancel(){
        this.setState({
            imageUrlIn: '',
            productIn: '',
            priceIn: ''
        })
    }
    render(){
        return(
            <div>
                <p>Image URL:</p>
                <input value={this.state.imageUrlIn} onChange={e => this.handleImageUrl(e.target.value)}/>
                <p>Product Name:</p>
                <input value={this.state.productIn} onChange={e => this.handleProduct(e.target.value)} />
                <p>Price:</p>
                <input value={this.state.priceIn}  onChange={e => this.handlePrice(e.target.value)} /><br />
                <button>Add to Inventory</button>
                <button onClick={this.handleCancel}>Cancel</button>
            </div>
        )
    }
}