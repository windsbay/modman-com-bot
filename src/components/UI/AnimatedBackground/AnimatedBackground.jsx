import React, { useState, useEffect } from 'react';
import './AnimatedBackground.css';
import Coin from './Coin';
import { Particles } from 'react-tsparticles';

const AnimatedBackground = () => {
    const [coins, setCoins] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

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
                velocityX: Math.random() * 2 - 1,
                velocityY: Math.random() * 2 - 1,
            };

            setCoins((prevCoins) => [...prevCoins, newCoin]);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [width, height]);

    const handleMouseMove = (event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
    };

    const coinsArray = [
        { name: 'Bitcoin', image: '/img/bitcoin.png' },
        { name: 'Ethereum', image: '/img/ethereum.png' },
    ];

    const particlesOptions = {
        background: {
            color: {
                value: '#000',
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: 'push',
                },
                onHover: {
                    enable: true,
                    mode: 'epulse',
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
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
                value: 100,
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

    return (
        <div
            className="animated-background"
            onMouseMove={handleMouseMove}
        >
            <Particles options={particlesOptions} />
            {coins.map((coin, index) => (
                <Coin
                    key={index}
                    top={coin.top + (mouseY - height / 2) * 0.1}
                    left={coin.left + (mouseX - width / 2) * 0.1}
                    size={coin.size}
                    coin={coinsArray[Math.floor(Math.random() * coinsArray.length)]}
                    velocityX={coin.velocityX}
                    velocityY={coin.velocityY}
                    onMouseMove={handleMouseMove}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;