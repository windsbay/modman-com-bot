import React, {useEffect, useState, useRef} from 'react';
import './AnimBackground.css';
import Nota from './Nota/Nota';


const AnimBackground = () => {
    const [notas, setNotas] = useState([]);
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
            const newNota = {
                top: Math.random() * height,
                left: Math.random() * width,
                size: Math.random() * 24 + 12,
            };

            setNotas((prevNotas) => [...prevNotas, newNota]);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [width, height]);

    return (
        <div className="animated-background">
            {notas.map((nota, index) => (
                <Nota key={index} top={nota.top} left={nota.left} size={nota.size} />
            ))}
        </div>
    );
};

export default AnimBackground;