import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import { items, sellers } from '../data.js';

const ItemDetails = () => {
    const {itemId} = useParams();
    const {name, latinName, description, imageSrc, countryOfOrigin, sellerId, price, quantity} = items[itemId];
    const {avatarSrc, storeName} = sellers[sellerId];
    return (
        <>
            <img src={imageSrc} alt={name}/>
            <div>
                <h2>{name}</h2>
                <p>{latinName}</p>
                <p>{description}</p>
                <p>Product of <span>{countryOfOrigin}</span></p>
                <button>{ quantity > 0 ? '$' + price + '- Buy now': 'Out of stock'}</button>
                <div>
                    <img src={avatarSrc} alt={storeName}/> 
                    <p>Sold by: <span>{storeName}</span></p>
                </div>
            </div>
        </>
    );
};

export default ItemDetails;