import React from 'react';
import './Index.css';

import {useTelegram} from "../../components/hooks/useTelegram";
import MainImage from "../../components/UI/MainImage/MainImage";



const Index = () => {

    const {user} = useTelegram();
    let image = document.querySelector('.image');

    const click = () => {
        image.classList.toggle('active');
    }


    return (
        <div className={'index'}>
                <h1>{user?.username}</h1>
                <MainImage />
                <h2><span className={'projectSym'}>M </span>15,000</h2>
        </div>
    );
};

export default Index;