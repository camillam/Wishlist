import React from 'react';
import './App.css';
import WishList from './WishList';
import Nav from './Nav';
import {WishProvider} from './WishContext';
import AddWish from './AddWish';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <WishProvider>  
      <Router>              
        <div className="limiter">
          <Nav/>
          <Switch>
            <Route path="/wishlist" component={WishList} />
            <Route path="/addwish" component={AddWish} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </WishProvider>
  );
}

export default App;
