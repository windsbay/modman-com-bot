import React from 'react';
import './Friends.css';
import { Picker, Emoji } from 'emoji-mart';


const Friends = () => {
    const emojicode = ':family_mwbb:';
    return (
        <div className={'friends'}>
            <h1><Emoji emoji={emojicode} size={24} /></h1>
        </div>
    );
};

export default Friends;