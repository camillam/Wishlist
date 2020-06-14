import React, {useState, createContext} from 'react';
import {Dropbox} from 'dropbox';
import keys from './data/keys.json';

export const WishContext = createContext();

export const WishProvider = props => {
    const [wishes, setWishes] = useState({});
    const [firstTimeCalled, setFirstTimeCalled] = useState(true); //TODO: Temporary fix to avoid fetching the txt file every second. See todo below. 

    const getWishlistFromApi = () => {
        const accessToken = keys["accessToken"];
        const dbx = new Dropbox({  
            accessToken,  
            fetch  
          });
    
        dbx.filesDownload({
            path: '/wish.txt'
        }).then(responseTxt => {
            return responseTxt.fileBlob.text();
        }).then(response => {
            var obj = JSON.parse(response);
            setWishes(obj);
        })
        .catch(error => console.error(error));
    }

    if (firstTimeCalled) {  //todo: WHY IS THE WISHPROVIDER INVOKED SEVERAL TIMES???
        getWishlistFromApi();
        setFirstTimeCalled(false);
    }

    return(
        <WishContext.Provider value={[wishes, setWishes]}>
            {props.children};
        </WishContext.Provider>
    );
}