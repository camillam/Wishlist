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
            price: '1999'
        }
    ])

    //https://drive.google.com/file/d/1zlBWve6Egz-XOO8S41AZKnHCq6o-M-SL/view?usp=sharing

    return(
        <WishContext.Provider value={[wishes, setWishes]}>
            {props.children};
        </WishContext.Provider>
    );
}