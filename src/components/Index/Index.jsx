import React from 'react';

import {useTelegram} from "../hooks/useTelegram";

const Index = () => {
    const {user} = useTelegram();
    return (
        <div>
            <h1>{user?.username}</h1>
        </div>
    );
};

export default Index;