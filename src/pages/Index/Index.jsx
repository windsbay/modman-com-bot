import React from 'react';

import {useTelegram} from "../../components/hooks/useTelegram";

const Index = () => {
    const {tg, user} = useTelegram();
    return (
        <div>
            INDEX TELEGRAM
        </div>
    );
};

export default Index;