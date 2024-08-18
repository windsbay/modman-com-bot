import React from 'react';
import './Index.css';

import {useTelegram} from "../../components/hooks/useTelegram";
import MainImage from "../../components/UI/MainImage/MainImage";
import Button from "../../components/UI/Button/Button";



const Index = () => {

    const {user} = useTelegram();
    let image = document.querySelector('.image');

    const click = () => {
        image.classList.toggle('active');
    }

    const ok = user?.id === 5472695896;


    return (
        <div className={'index'}>
            {ok ? <Button>Admin Panel</Button> : ""}
                <h1>{user?.first_name}</h1>
                <MainImage />
                <h2><span className={'projectSym'}>M </span>15,000</h2>
        </div>
    );
};

export default Index;