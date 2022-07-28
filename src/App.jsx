import React, { useState } from 'react';
import './App.css';
import productData from './products.json';

function App() {
  const [products, setProducts] = useState(productData);

  const handleDelete = (_id) => {
     const deleted = products.filter(elem => elem._id !== _id)
      setProducts(deleted)
  }

  const handleSearch = (e) => {
    
    if(e.target.value === ''){
      setProducts (productData)
    } else{
      const searched = productData.filter (elem => elem.name.toLowerCase().includes((e.target.value).toLowerCase()))
      setProducts (searched)
    }
  }

  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <input type="text" placeholder='Search' onChange={(e) => handleSearch(e)} />
      <div>
        {products.map((elem) => {
          return(
            <div key={elem._id}>
              <h3>{elem.name}</h3>
              <h3>{elem.price}</h3>
              <button onClick={() => handleDelete (elem._id)}> Delete</button>
            </div>
          )
        })}
      </div>

      {/* Your code goes here */}

    </div>
  );
}

export default App;
