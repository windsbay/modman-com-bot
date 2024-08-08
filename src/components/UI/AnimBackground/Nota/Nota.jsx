import React from 'react';
import './Nota.css';

const Nota = ({ top, left, size }) => {
    return (
        <div
            className="nota"
            style={{
                top: `${top}px`,
                left: `${left}px`,
                fontSize: `${size}px`,
            }}
        >
            &#9835;
        </div>
    );
};

export default Nota;