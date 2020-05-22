import React, {useContext} from 'react';
import {WishContext} from './WishContext';
import {Link} from 'react-router-dom';


const Nav = () => {
    //const [wishes,] = useContext(WishContext);

    return (
        <nav>
            <ul className="nav-list">  
                <li><Link to="/">Home</Link></li>             
                <li><Link to="/wishlist">Camilla's wishes</Link></li>
                <li><Link to="/addwish">Add wish</Link></li>
                <li><Link to="/about">About</Link></li> 
            </ul>
        </nav>
    )
}

export default Nav;