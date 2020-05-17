 import React,{useContext} from 'react';
 import Wish from './Wish';
 import {WishContext} from './WishContext';
 
 const WishList = () => {
    const [wishes] = useContext(WishContext);

    return(
        <div>
            <p>Antal ønsker: {wishes.length}</p>           
            <div className="wrap-table100">
            <div className="table100">
            <table>
                <thead>
                    <tr className="tableHead">
                        <th className="column1">Description</th>
                        <th className="column2">Price</th>
                    </tr>
                </thead>
                <tbody>
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