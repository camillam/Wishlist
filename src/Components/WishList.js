 import React,{useContext} from 'react';
 import Wish from './Wish';
 import {WishContext} from '../WishContext';
 
 const WishList = () => {
    const [wishes] = useContext(WishContext);

    return(
        <div>         
            <div className="wrap-table100">
            <div className="table100">
            <table>
                <tbody>
                    <tr>
                        <td className="column1"><b>Antal ønsker: {wishes.length}</b></td>
                        <td className="column2"></td>
                    </tr>
                    {wishes.map(wish => (
                        <Wish description={wish.description} price={wish.price} />
                    ))} 
                </tbody>
            </table> 
            </div>
            </div>        
        </div>       
    );
 }

 export default WishList;