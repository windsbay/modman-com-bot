import React from 'react';

import {useTelegram} from "../../components/hooks/useTelegram";

const Index = () => {
    const {tg, user, username, avatar} = useTelegram();

    return (
        <div>
            <img src={avatar} alt=""/>
            <h1>{username}</h1>
        </div>
    );
};

export default Index;