import React, {useState} from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 300px;
    height: 300px;
    margin-top: 50px;
    margin-bottom: 20px;
    transition: transform 0.2s ease-in-out;

  &.active {
    transform: scale(0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`;

const MainImage = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <Image
            src="/img/modmancoin.png"
            className={isActive? 'active' : ''}
            onClick={handleClick}
        />
    );
};

export default MainImage;