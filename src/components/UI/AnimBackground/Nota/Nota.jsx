import React from 'react';
import './Nota.css';

const notaTypes = [
    { symbol: '', size: 'mall' },
    { symbol: '', size: 'edium' },
    { symbol: '', size: 'large' },
    { symbol: '', size: 'mall' },
    { symbol: '', size: 'edium' },
    { symbol: '', size: 'large' },
];

const Nota = ({ top, left, size, symbol, notaType }) => {
    return (
        <div
            className={`nota ${notaType}`}
            style={{
                top: `${top}px`,
                left: `${left}px`,
                fontSize: `${size}px`,
            }}
        >
            {symbol}
        </div>
    );
};

export default Nota;