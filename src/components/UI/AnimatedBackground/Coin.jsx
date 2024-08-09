import React from 'react';
import './Coin.css';

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