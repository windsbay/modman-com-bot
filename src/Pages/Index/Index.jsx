import React, {useContext} from 'react';
import './Index.css';

import {useTelegram} from "../../components/hooks/useTelegram";
import MainImage from "../../components/UI/MainImage/MainImage";
import Button from "../../components/UI/Button/Button";
import {Context} from "../../index";



const Index = (data) => {

    const {tg} = useTelegram();
    let image = document.querySelector('.image');

    const click = () => {
        image.classList.toggle('active');
    }

    const isAdmin  = tg.initDataUnsafe?.user?.id === 5472695896;
    const isPremium = tg.initDataUnsafe?.user?.is_premium;
    const {user} = useContext(Context)


    return (
        <div className={'index'}>
            {isAdmin? <Button>Admin Panel</Button> : ""}
            <h1>{tg.initDataUnsafe?.user?.first_name}</h1>
            <MainImage />
            <h2><span className={'projectSym'}>M </span>{data}</h2>
        </div>
    );
}

export default Index;