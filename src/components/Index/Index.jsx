import React from 'react';
import './Index.css';

import {useTelegram} from "../hooks/useTelegram";

const Index = () => {

    const {tg, user} = useTelegram();
    return (
        <div className={'index'}>
                <h1>{user?.username}</h1>

                <h2>15,000</h2>

        </div>
    );
};

export default Index;