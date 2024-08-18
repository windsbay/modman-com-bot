import React, {useContext} from 'react';
import './Index.css';

import {useTelegram} from "../../components/hooks/useTelegram";
import MainImage from "../../components/UI/MainImage/MainImage";
import Button from "../../components/UI/Button/Button";
import {Context} from "../../index";
import {exist} from "../../http/userAPI";



const Index = (props) => {
    const data = props.data;
    const {tg} = useTelegram();

    const exists = exist(tg.initDataUnsafe?.user?.id);

    const isAdmin  = tg.initDataUnsafe?.user?.id === 5472695896;
    const isPremium = tg.initDataUnsafe?.user?.is_premium;
    const {user} = useContext(Context)


    return (
        <div className={'index'}>
            {isAdmin? <Button>Admin Panel</Button> : ""}
            <h1>{tg.initDataUnsafe?.user?.first_name}</h1>
            <MainImage isPremium={isPremium} />
            <h2><span className={'projectSym'}>M </span>{data.balance}</h2>
            <h2>{exists.data}</h2>
        </div>
    );
}

export default Index;