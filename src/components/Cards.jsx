import React from 'react'
import './styles/Cart.css'


function Cards({item, handleClick}) {
    const {title,price,img}=item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="image"/>
        </div>
        <div className="details">
            <p>{title}</p>
           
            <p>Price - {price} Rs</p>
            <button onClick={()=> handleClick(item)}> Add to Cart</button>
        </div>
    </div>
  ) 
}

export default Cards