import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import productData from './products.json';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState(productData);

  const handleDelete = (_id) => {
     const deleted = products.filter(elem => elem._id !== _id)
      setProducts(deleted)
  }

  const handleSearch = (searchedValue) => {
    
    if(searchedValue === ''){
      setProducts (productData)
    } else{
      const searched = productData.filter (elem => elem.name.toLowerCase().includes((searchedValue).toLowerCase()))
      setProducts (searched)
    }
  }

  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <SearchBar onSearch = {handleSearch} />
      <div>
        {products.map((elem) => {
          return(
            <ProductCard key = {elem._id} info = {elem} onDelete={handleDelete}/>
          )
        })}
      </div>

      {/* Your code goes here */}

    </div>
  );
}

export default App;
