import React, { useState, useEffect } from 'react';
import './AnimatedBackground.css';
import Coin from './Coin';
import { Particles } from 'react-tsparticles';
import { createPortal } from 'react-dom';

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
                coin: Math.floor(Math.random() * 2),
                velocityX: Math.random() * 2 - 1,
                velocityY: Math.random() * 2 - 1,
            };

            setCoins((prevCoins) => [...prevCoins, newCoin]);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [width, height]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCoins((prevCoins) => {
                const newCoins = prevCoins.map((coin) => {
                    const newTop = coin.top + coin.velocityY;
                    const newLeft = coin.left + coin.velocityX;

                    if (newTop < 0 || newTop > height) {
                        coin.velocityY = -coin.velocityY;
                    }

                    if (newLeft < 0 || newLeft > width) {
                        coin.velocityX = -coin.velocityX;
                    }

                    return {
                        ...coin,
                        top: newTop,
                        left: newLeft,
                    };
                });

                return newCoins;
            });
        }, 16);

        return () => {
            clearInterval(intervalId);
        };
    }, [width, height]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCoins((prevCoins) => {
                const newCoins = prevCoins.filter((coin, index) => index < 10);

                return newCoins;
            });
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const coinsArray = [
        { name: 'Bitcoin', image: '/img/bitcoin.png' },
        { name: 'Ethereum', image: '/img/ethereum.png' },
        { name: 'Modman', image: '/img/modmancoin.png' },
    ];

    const particlesOptions = {
        background: {
            color: {
                value: '#000',
            },
        },
        fpsLimit: 120,
        particles: {
            color: {
                value: '#fff',
            },
            links: {
                color: {
                    value: '#fff',
                },
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce',
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 10,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: {
                    min: 1,
                    max: 5,
                },
            },
        },
        detectRetina: true,
    };

    return createPortal(
        <div className="animated-background">
            <Particles options={particlesOptions} />
            {coins.map((coin, index) => (
                <Coin
                    key={index}
                    top={coin.top}
                    left={coin.left}
                    size={coin.size}
                    coin={coinsArray[coin.coin]}
                    velocityX={coin.velocityX}
                    velocityY={coin.velocityY}
                />
            ))}
        </div>, document.body
    );
};

export default AnimatedBackground;