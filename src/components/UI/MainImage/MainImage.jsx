import React, {useState} from 'react';

const MainImage = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <img
            src="/img/modmancoin.png"
            className={isActive ? 'image active' : 'image'}
            onClick={handleClick}
         alt={''}/>
    );
};

export default MainImage;