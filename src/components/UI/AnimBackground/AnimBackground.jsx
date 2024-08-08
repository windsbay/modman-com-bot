import React, {useEffect, useState} from 'react';
import './AnimBackground.css';

const AnimBackground = () => {
    const [stars, setStars] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const createStars = () => {
            const starCount = Math.floor(width * height / 1000);
            const starsArray = [];
            for (let i = 0; i < starCount; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                const size = Math.random() * 2 + 1;
                starsArray.push({ x, y, size });
            }
            setStars(starsArray);
        };
        createStars();
    }, [width, height]);

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

    return (
        <div className="star-background">
            {stars.map((star, index) => (
                <div
                    key={index}
                    className="star"
                    style={{
                        left: `${star.x}px`,
                        top: `${star.y}px`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                />
            ))}
        </div>
    );
};

export default AnimBackground;