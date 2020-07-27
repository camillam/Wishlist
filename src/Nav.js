import React from 'react';
import {Link} from 'react-router-dom';


const Nav = () => {

    return (
        <nav>
            <ul className="nav-list">  
                <li><Link to="/">Home</Link></li>             
                <li><Link to="/camillaswishlist">Camillas ønsker</Link></li>
                <li><Link to="/ellaswishlist">Ellas ønsker</Link></li>
                {/* <li><Link to="/addwish">Add wish</Link></li> */}
                <li><Link to="/about">About</Link></li> 
            </ul>
        </nav>
    )
}

export default Nav;