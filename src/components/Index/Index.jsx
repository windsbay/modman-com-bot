import React from 'react';
import './Index.css';

import {useTelegram} from "../hooks/useTelegram";

const Index = () => {

    const {user} = useTelegram();
    return (
        <div className={'index'}>
            <img src={user?.photo_url} alt={user?.username} />
            <h1>{user?.username}</h1>
        </div>
    );
};

export default Index;