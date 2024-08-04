import React from 'react';
import './Index.css';

import {useTelegram} from "../hooks/useTelegram";
import {useParams} from "react-router-dom";



const Index = () => {
    const {startapp} = useParams();
    const {tg, user} = useTelegram();
    let ref = "";

    if(startapp && startapp.length > 0){
        ref = "Ref: "+startapp;
    }
    else {
        ref = "";
    }
    return (
        <div className={'index'}>
            <div>
                <p>{
                    ref
                }</p>
            </div>
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