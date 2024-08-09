import React from 'react';
import './Index.css';

import {useTelegram} from "../hooks/useTelegram";
import AnimatedBackground from "../UI/AnimatedBackground/AnimatedBackground";



const Index = () => {

    const {user} = useTelegram();
    const image = document.querySelector('.image');

    image.addEventListener('click', () => {
        image.classList.toggle('active');
    });


    return (
        <div className={'index'}>
            <AnimatedBackground/>

                <h1>{user?.username}</h1>


                <img src="/img/modmancoin.png" className={'active'} alt="" />


                <h2>15,000</h2>

        </div>
    );
};

export default Index;