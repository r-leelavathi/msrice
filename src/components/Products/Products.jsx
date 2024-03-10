import React from 'react'
import './Product.css'
import prod1 from '../../assets/prod1.jpeg';
import prod2 from '../../assets/prod2.jpeg';
import prod3 from '../../assets/prod3.jpeg';
import prod4 from '../../assets/prod4.jpeg';
const Products = () => {
  return (
<div class="product-container">
    <div class="product">
      <img src={prod1} alt="Organic Bananas"/>
      <h2>Organic Bananas</h2>
      <p class="price">Rs. 59 per Kg</p>
    </div>

    <div class="product">
      <img src={prod2} alt="Organic Vegetables"/>
      <h2>Organic Spinach</h2>
      <p class="price">Rs. 30 per bunch</p>
    </div>

    <div class="product">
      <img src={prod3} alt="Organic Spinach"/>
      <h2>Organic Coriandor</h2>
      <p class="price">Rs. 20 per bunch</p>
    </div>
    <div class="product">
      <img src={prod4} alt="Organic Spinach"/>
      <h2>Rice</h2>
      <p class="price">Rs. 2400 per 25 Kg</p>
    </div>
    </div>
  )
}

export default Products
