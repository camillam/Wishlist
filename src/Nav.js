import React, {useContext} from 'react';
import {WishContext} from './WishContext';

const Nav = () => {
    const [wishes] = useContext(WishContext);

    return (
        <div>
            <h3>Camillas ønskeseddel</h3>
            <p>Antal ønsker: {wishes.length}</p>
        </div>
    )
}

export default Nav;