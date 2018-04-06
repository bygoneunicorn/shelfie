import React from 'react';

export default function Product(props){
    return(
        <div>
            {console.log(props)}
           <h3>{props.inventory.name}</h3>
           <p>{props.inventory.price}</p>
            <img src={props.inventory.image_url} alt='Product'/>
        </div>
    )
}