import React from 'react';

function MyProducts(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>{props.price}</p>
    </div>
  )
}

export default MyProducts;