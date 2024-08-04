import React from 'react';

import {useTelegram} from "../../components/hooks/useTelegram";

const Index = () => {
    const {tg, user} = useTelegram();
    return (
        <div>
            <img src={tg.initDataUnsafe?.user?.img} alt=""/>
            <p>{user?.id}</p>
        </div>
    );
};

export default Index;