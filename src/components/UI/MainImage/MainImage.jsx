import React, {useState} from 'react';

const MainImage = (props) => {
    const isP = props.isPremium;


    return (
        <img
            src="/img/modmancoin.png"
            className={'image'}
            style={{
                border: isP? '4px solid #fff' : '',
                boxShadow: isP? '0 0 20px #fff' : '',
            }}
         alt={''}/>
    );
};

export default MainImage;