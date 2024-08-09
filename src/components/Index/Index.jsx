import React from 'react';
import './Index.css';

import {useTelegram} from "../hooks/useTelegram";



const Index = () => {

    const {user} = useTelegram();
    let image = document.querySelector('.image');

    const click = () => {
        image.classList.toggle('active');
    }


    return (
        <div className={'index'}>
                <h1>{user?.username}</h1>
                <img src="/img/modmancoin.png" className={'image'} onClick={click} />
                <h2>15,000</h2>
        </div>
    );
};

export default Index;