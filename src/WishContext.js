import React, {useState, createContext, useEffect} from 'react';
import {Dropbox} from 'dropbox';
import keys from './data/keys.json';

export const WishContext = createContext();

export const WishProvider = props => {
    const [cWishes, setCWishes] = useState({});
    const [eWishes, setEWishes] = useState({});

    const getWishlistFromApi = () => {
        const accessToken = keys["accessToken"];
        const dbx = new Dropbox({  
            accessToken,  
            fetch  
          });
    
        dbx.filesDownload({
            path: '/CamillasWish.txt'
        }).then(responseTxt => {
            return responseTxt.fileBlob.text();
        }).then(response => {
            var obj = JSON.parse(response);
            setCWishes(obj);
        })
        .catch(error => console.error(error));

        dbx.filesDownload({  //todo: do this in a more clever way.  Maybe it is possible to fecth both files at the same time?
            path: '/EllasWish.txt'
        }).then(responseTxt => {
            return responseTxt.fileBlob.text();
        }).then(response => {
            var obj = JSON.parse(response);
            setEWishes(obj);
        })
        .catch(error => console.error(error));
    }

    useEffect(() => {
        getWishlistFromApi();
    }, []);

    return(
        <WishContext.Provider value={[cWishes, eWishes]}>
            {props.children};
        </WishContext.Provider>
    );
}