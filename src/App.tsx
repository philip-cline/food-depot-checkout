import React from 'react';
import logo from './logo.svg';
import './App.css';

import products from './data/product-master-list.json';

import ProductList from './components/ProductList';


function App() {
  const {epicerieList, vegeLegumeList} = products

  console.log('heres our list', epicerieList)

  return (
    <div className="App">
      <div>Placeholder for banner</div>
      <div>Placeholder for menu</div>
      <div>Placeholder for search bar</div>
      <div>Placeholder for item list</div>
      <ProductList
        products={epicerieList}
        style={{color: 'blue'}}/>
      <ProductList
        products={vegeLegumeList}
        style={{color: 'green'}}
      />
      <div>Placeholder for account balance</div>

    </div>
  );
}

export default App;
