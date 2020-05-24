import React, {useState, createContext} from 'react';
import {Dropbox} from 'dropbox';

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

    console.log(getWishlistFromApi());

    return(
        <WishContext.Provider value={[wishes, setWishes]}>
            {props.children};
        </WishContext.Provider>
    );
}

async function getWishlistFromApi() {
    const accessToken = '8IfTC1NEM54AAAAAAAAifyUm0MYHloCbaYtpR6_xiVaYt3CJa3yR630_swRMnbQg';
    const dbx = new Dropbox({  
        accessToken,  
        fetch  
      });

    dbx.filesListFolder({  
        path: ''  
    }).then(response => console.log(response)); 
}