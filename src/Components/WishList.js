 import React,{useContext} from 'react';
 import Wish from './Wish';
 import {WishContext} from '../WishContext';
 
 const WishList = (props) => {
    const [cWishes, eWishes] = useContext(WishContext); //todo: do not always use Camillas
    const Ella = "E";
    const Camilla = "C";

    if (cWishes === undefined) { 
        return(<div>Loading....</div>);
    } else if (!cWishes.length) {
        return (<div>An error occured. No wishes found. </div>);
    } else {
        return(
            <div> 
                <h1>{props.headline}</h1>  
                <p>Antal ønsker: {cWishes.length}</p>      
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
                        {(props.user === Camilla) ? //Todo: make a better solution where it is possible to have more than two users. 
                            cWishes.map(wish => (
                                <Wish description={wish.description} price={wish.price} link={wish.link} />
                            ))
                        :
                        eWishes.map(wish => (
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