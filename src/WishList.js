 import React,{useState, useContext} from 'react';
 import Wish from './Wish';
 import {WishContext} from './WishContext';
 
 const WishList = () => {
    const [wishes, setWishes] = useContext(WishContext);

    return(
        <div>
            <div class="container-table100">
            <div class="wrap-table100">
            <div class="table100">
            <table>
                <thead>
                    <tr className="tableHead">
                        <th class="column1">Description</th>
                        <th class="column2">Price</th>
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
        </div>       
    );
 }

 export default WishList;