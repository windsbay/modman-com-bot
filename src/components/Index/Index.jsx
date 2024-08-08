import React from 'react';
import './Index.css';

import {useTelegram} from "../hooks/useTelegram";
import TelegramAvatar from "../UI/TelegramAvatar/TelegramAvatar";



const Index = () => {

    const {user} = useTelegram();


    return (
        <div className={'index'}>
            <h1>Home Page</h1>
            <div>
                <h1>{user?.username}</h1>
            </div>
            <div>
                <TelegramAvatar />
            </div>
            <div>
                <h2>15,000</h2>
            </div>
        </div>
    );
};

export default Index;