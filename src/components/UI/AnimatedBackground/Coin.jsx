import React from 'react';
import './Coin.css';

const coins = [
    { name: 'Bitcoin', image: '/img/bitcoin.png' },
    { name: 'Ethereum', image: '/img/ethereum.png' },
    { name: 'Modman', image: '/img/modmancoin.png' },
];

const Coin = ({ top, left, size, coin, velocityX, velocityY }) => {
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