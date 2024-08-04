import React from 'react';

import {tg} from "../../components/hooks/useTelegram";

const Index = () => {

    return (
        <div>
            <img src={tg.initDataUnsafe?.user?.photo_url} alt=""/>
            <h1>{tg.initDataUnsafe?.user?.username}</h1>
        </div>
    );
};

export default Index;