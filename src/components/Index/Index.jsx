import React from 'react';
import './Index.css';

import {useTelegram} from "../hooks/useTelegram";
import {useParams} from "react-router-dom";



const Index = () => {

    const {tg, user} = useTelegram();


    return (
        <div className={'index'}>

            <div>
                <h1>{user?.username}</h1>
            </div>
            <div>
                <h2>15,000</h2>
            </div>
        </div>
    );
};

export default Index;