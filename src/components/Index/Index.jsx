import React from 'react';

import {useTelegram} from "../hooks/useTelegram";

const Index = () => {

    const {user} = useTelegram();
    return (
        <div className={index}>
            <h1>{user?.username}</h1>
        </div>
    );
};

export default Index;