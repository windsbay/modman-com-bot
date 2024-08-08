import React, { useState, useEffect } from 'react';
import './AnimatedBackground.css';
import Coin from './Coin';
import Particles from 'react-particles-js';

const AnimatedBackground = () => {


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
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [width, height]);

    const handleMouseMove = (event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
    };

    const handleMouseDown = () => {
        const newCoin = {
            top: mouseY,
            left: mouseX,
            size: Math.random() * 100 + 20,
            coin: coins[Math.floor(Math.random() * coins.length)],
        };

        setCoins((prevCoins) => [...prevCoins, newCoin]);
    };

    const coinsArray = [
        { name: 'Bitcoin', image: '/bitcoin.png' },
        { name: 'Ethereum', image: '/ethereum.png' },
    ];

    const particlesParams = {
        particles: {
            number: {
                value: 100,
            },
            size: {
                value: 3,
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'bounce',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'epulse',
                },
                onclick: {
                    enable: true,
                    mode: 'push',
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 800,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 800,
                    size: 80,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3,
                },
                repulse: {
                    distance: 400,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    };

    return (
        <div
            className="animated-background"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
        >
            <Particles params={particlesParams} />
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