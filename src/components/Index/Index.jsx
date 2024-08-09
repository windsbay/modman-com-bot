import React from 'react';
import './Index.css';

import {useTelegram} from "../hooks/useTelegram";
import AnimatedBackground from "../UI/AnimatedBackground/AnimatedBackground";



const Index = () => {

    const {user} = useTelegram();


    return (
        <div className={'index'}>
            <AnimatedBackground />
            <div className={'name'}>
                <h1>{user?.username}</h1>
            </div>
            <div>
                <img src="/img/modmancoin.png" alt=""/>
            </div>
            <div className={'score'}>
                <h2>15,000</h2>
            </div>
        </div>
    );
};

export default Index;