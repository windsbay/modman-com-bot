import React from 'react';
import './Friends.css';


const Friends = () => {
    return (
        <div className={'friends'}>
            <img src="/img/family.png" alt=""/>
            <h2>Invite Frens</h2>
            <div className={'refer-rewards'}>
                    <p><span className={'projectSym'}>M</span> 0</p>
                    <button className={'glow-on-hover'} type={'button'}>Claim</button>
            </div>
        </div>
    );
};

export default Friends;