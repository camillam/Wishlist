 import React,{useContext} from 'react';
 import Wish from './Wish';
 import {WishContext} from '../WishContext';
 
 const WishList = () => {
    const [wishes] = useContext(WishContext);

    if (wishes === undefined) { 
        return(<div>Loading....</div>);
    } else if (!wishes.length) {
        return (<div>An error occured. No wishes found. </div>);
    } else {
        return(
            <div>   
                <p>Antal ønsker: {wishes.length}</p>      
                <div className="wrap-table100">
                <div className="table100">
                <table>
                    <thead>
                        <tr>
                            <td className="column1">Beskrivelse</td>
                            <td className="column2">Pris</td>
                            <td className="column3">Link</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {wishes.map(wish => (
                            <Wish description={wish.description} price={wish.price} link={wish.link} />
                        ))} 
                    </tbody>
                </table> 
                </div>
                </div>        
            </div>       
        );
    }
 }

 export default WishList;