import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({productId}) => {
  return (
    <div>
      <h2>Product {productId}</h2>
      <Link to="">
        <img src="" alt=" Image1" />
      </Link>
      <Link to="/Products/Page2">
        <img src="path/to/image2.jpg" alt="Image2" />
      </Link>
      <Link to="/Products/Page3">
        <img src="path/to/image3.jpg" alt="Image3" />
      </Link>
    </div>
  );
};

export default Product
