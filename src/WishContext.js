import React, {useState, createContext} from 'react';
import {Dropbox} from 'dropbox';
import keys from './data/keys.json';

export const WishContext = createContext();

export const WishProvider = props => {
    const [cWishes, setCWishes] = useState({});
    const [eWishes, setEWishes] = useState({});
    const [firstTimeCalled, setFirstTimeCalled] = useState(true); //Temporary fix to avoid fetching the txt file every second. See todo below. 

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

    if (firstTimeCalled) {  //todo: WHY IS THE WISHPROVIDER INVOKED SEVERAL TIMES???
        getWishlistFromApi();
        setFirstTimeCalled(false);
    }

    return(
        <WishContext.Provider value={[cWishes, eWishes]}>
            {props.children};
        </WishContext.Provider>
    );
}