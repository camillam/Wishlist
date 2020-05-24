import React, {useState, createContext} from 'react';
import {Dropbox} from 'dropbox';

export const WishContext = createContext();

export const WishProvider = props => {
    const [wishes, setWishes] = useState({});

    const getWishlistFromApi = () => {
        const accessToken = '8IfTC1NEM54AAAAAAAAifyUm0MYHloCbaYtpR6_xiVaYt3CJa3yR630_swRMnbQg';
        const dbx = new Dropbox({  
            accessToken,  
            fetch  
          });
    
        dbx.filesDownload({
            path: '/wish.txt'
        }).then(responseTxt => {
            return responseTxt.fileBlob.text();
        }).then(response => {
            console.log(response);
            var obj = JSON.parse(response);
            console.log(obj);
            setWishes(obj);
        })
        .catch(error => console.error(error));
    }

    //todo: WHY IS THIS REPEATED EVERY SECOND??
    //getWishlistFromApi();

    return(
        <WishContext.Provider value={[wishes, setWishes]}>
            {props.children};
        </WishContext.Provider>
    );
}