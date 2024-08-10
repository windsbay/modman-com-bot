import React from 'react';
import './Friends.css';
import twemoji from 'twemoji';

const Friends = () => {
    return (
        <div className={'friends'}>
            <h1>{twemoji.parse(':family_mwbb:')}</h1>
        </div>
    );
};

export default Friends;