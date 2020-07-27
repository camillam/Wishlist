import React from 'react';
import './App.css';
import WishList from './Components/WishList';
import Nav from './Nav';
import {WishProvider} from './WishContext';
import AddWish from './Components/AddWish';
import About from './Components/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <WishProvider>  
      <Router>      
        <Nav/>          
        <div className="limiter">
          <Switch>
            <Route path="/camillaswishlist" render={(props) => <WishList {...props} headline={'Camillas ønskeseddel'} user={'C'}/>} />
            <Route path="/ellaswishlist" render={(props) => <WishList {...props} headline={'Ellas ønskeseddel'} user={'E'}/>} />
            <Route path="/addwish" component={AddWish} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </WishProvider>
  )
}

export default App;
