import React from 'react';
import Button from "../UI/Button/Button";
import {useTelegram} from "../hooks/useTelegram";
import './Header.css';



const Header = () => {
    const {user, onClose} = useTelegram();
    const tg = window.Telegram.WebApp;


    return (
        <div className="header">
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
            <img src={tg.initDataUnsafe?.user?.avatar} />
        </div>
    );
};

export default Header;