import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button {...props} className={'glow-on-hover'} type={'button'} />
    );
};

export default Button;