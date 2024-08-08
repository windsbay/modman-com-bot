import React, { useState, useEffect } from 'react';
import './AnimatedBackground.css';
import Coin from './Coin';

const AnimatedBackground = () => {
    const [coins, setCoins] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newCoin = {
                top: Math.random() * height,
                left: Math.random() * width,
                size: Math.random() * 100 + 20,
                coin: coins[Math.floor(Math.random() * coins.length)],
            };

            setCoins((prevCoins) => [...prevCoins, newCoin]);

            setTimeout(() => {
                setCoins((prevCoins) => prevCoins.slice(1));
            }, 5000);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [width, height]);

    const coinsArray = [
        { name: 'Bitcoin', image: '/img/bitcoin.png' },
        { name: 'Ethereum', image: '/img/ethereum.png' },
    ];

    return (
        <div className="animated-background">
            {coins.map((coin, index) => (
                <Coin
                    key={index}
                    top={coin.top}
                    left={coin.left}
                    size={coin.size}
                    coin={coinsArray[Math.floor(Math.random() * coinsArray.length)]}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;