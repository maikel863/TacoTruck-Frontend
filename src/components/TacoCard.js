import React, {useState} from 'react';

export default function TacoCard({taco, onAddToOrder }) {
    const { name, image, price, description} = taco


return (
    <div className="Card">
        <h3>{name}</h3>
        <img src={image} width="300" height="300" alt=""/>
        <p>${price}</p>
        <p>{description}</p>

    <button onClick={() => onAddToOrder(taco)}>
        Add to Order
    </button>
    </div>
    )
}