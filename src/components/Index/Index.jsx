import React from 'react';

import {useTelegram} from "../hooks/useTelegram";

const Index = () => {
    const {tg, user} = useTelegram();
    return (
        <div className={index}>
            <h1>{tg.initDataUnsafe?.user?.username}</h1>
        </div>
    );
};

export default Index;