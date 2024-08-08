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
            const notaType = notaTypes[Math.floor(Math.random() * notaTypes.length)];
            const newNota = {
                top: Math.random() * height,
                left: Math.random() * width,
                size: Math.random() * 24 + 12,
                symbol: notaType.symbol,
                notaType: notaType.size,
            };

            setNotas((prevNotas) => [...prevNotas, newNota]);

            setTimeout(() => {
                setNotas((prevNotas) => prevNotas.slice(1));
            }, 5000);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [width, height]);

    return (
        <div className="animated-background">
            {notas.map((nota, index) => (
                <Nota
                    key={index}
                    top={nota.top}
                    left={nota.left}
                    size={nota.size}
                    symbol={nota.symbol}
                    notaType={nota.notaType}
                />
            ))}
        </div>
    );
};

export default AnimBackground;