import React from 'react';

import {useTelegram} from "../../components/hooks/useTelegram";

const Index = () => {
    const {tg, user} = useTelegram();
    return (
        <div>
            <img src={user?.photo_url} alt=""/>
            <h1>{user?.username}</h1>
        </div>
    );
};

export default Index;