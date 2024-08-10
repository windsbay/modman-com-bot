import React from 'react';
import './Friends.css';
import Button from "../../components/UI/Button/Button";


const Friends = () => {
    const emojicode = ':family_mwbb:';
    return (
        <div className={'friends'}>
            <img src="/img/family.png" alt=""/>
            <h2>Invite Frens</h2>
            <div className={'refer-rewards'}>
                    <p><span className={'projectSym'}>M</span> 0</p>
                    <Button disabled>Claim</Button>
            </div>
        </div>
    );
};

export default Friends;