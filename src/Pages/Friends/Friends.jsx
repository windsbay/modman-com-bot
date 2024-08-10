import React from 'react';
import './Friends.css';
import {Emoji} from 'react-emoji-render';

const Friends = () => {
    return (
        <div className={'friends'}>
            <h1><Emoji text={':family_mwbb:'} /></h1>
        </div>
    );
};

export default Friends;