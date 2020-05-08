import React, {useState, createContext} from 'react';

export const WishContext = createContext();

export const WishProvider = props => {
    const [wishes, setWishes] = useState([
        {
            description: 'Væglamper',
            price: '300-400'
        },
        {
            description: 'Roccamore sko',
            price: '2000'
        }
    ]);

    return(
        <WishContext.Provider value={[wishes, setWishes]}>
            {props.children};
        </WishContext.Provider>
    );
}