import React, {useContext} from 'react';
import {WishContext} from './WishContext';
import {Link} from 'react-router-dom';

const Nav = () => {
    const [wishes,] = useContext(WishContext);

    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <Link to="/wishlist">
                    <li className="nav-links">Camilla's wishes</li>
                </Link>
                <Link to="/addwish">
                    <li className="nav-links">Add wish</li>
                </Link>
                <Link to="/about">
                    <li className="nav-links">About</li> 
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;