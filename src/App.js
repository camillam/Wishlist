import React from 'react';
import './App.css';
import WishList from './WishList';
import Nav from './Nav';
import {WishProvider} from './WishContext';
import AddWish from './AddWish';

function App() {
  return (
    <WishProvider>                 
      <div className="limiter">
          <Nav/>
          <WishList/>
          <AddWish/>
      </div>
    </WishProvider>
  );
}

export default App;
