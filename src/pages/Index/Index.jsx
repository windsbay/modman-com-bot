import React from 'react';

import {useTelegram} from "../../components/hooks/useTelegram";

const Index = () => {
    const {tg, user} = useTelegram();
    return (
        <div>
            <img src={user?.profile.img} alt=""/>
        </div>
    );
};

export default Index;