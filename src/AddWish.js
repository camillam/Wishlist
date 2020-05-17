import React, {useState, useContext} from 'react';
import {WishContext} from './WishContext';
 
const AddWish = () => {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [, setWishes] = useContext(WishContext);

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const updatePrice= (e) => {
        setPrice(e.target.value);
    }

    const AddWish = e => {
        e.preventDefault();
        setWishes(previousWishes => [...previousWishes, {description: description, price: price}]) //get latest information about the state before adding
    }

    return(
        <form onSubmit={AddWish}>
            <input type='text' name='beskrivelse' value={description} onChange={updateDescription}/>
            <input type='test' name='price' value={price} onChange={updatePrice}/>
            <button>Gem</button>
        </form>
    )
}

export default AddWish;