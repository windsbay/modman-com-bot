import React from 'react';
import './Coin.css';

const coins = [
    { name: 'Bitcoin', image: '/img/bitcoin.png' },
    { name: 'Ethereum', image: '/img/ethereum.png' },
];

const Coin = ({ top, left, size, coin }) => {
    return (
        <div
            className="coin"
            style={{
                top: `${top}px`,
                left: `${left}px`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundImage: `url(${coin.image})`,
            }}
        />
    );
};

export default Coin;