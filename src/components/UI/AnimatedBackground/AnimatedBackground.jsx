import React from 'react';
import './AnimatedBackground.css';
import Coin from './Coin';
import { Particles } from 'react-tsparticles';

const AnimatedBackground = () => {
    const [coins, setCoins] = React.useState([]);
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    React.useEffect(() => {
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

    const coinsArray = [
        { name: 'Bitcoin', image: '/bitcoin.png' },
        { name: 'Ethereum', image: '/ethereum.png' },
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

    return (
        <div className="animated-background">
            <Particles options={particlesOptions} />
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