import React from 'react';
import './Bottom.css';

const Bottom = () => {
    const url = new URL(window.location.href);
    return (
        <div>
            <nav>
                <a className={url.pathname === "/"? 'active' : ''} href="/">
                    <div className={'icon'}>
                        <i className="fas fa-fw fa-home" aria-hidden={true}></i>
                    </div>
                    <div className={'name'}><span data-text={'Home'}>Home</span></div>
                </a>
                <a className={url.pathname === '/tasks'? 'active' : ''} href={'/tasks'}>
                    <div className={'icon'}>
                        <i className="fas fa-fw fa-tasks" aria-hidden={true}></i>
                    </div>
                    <div className={'name'}><span data-text={'Tasks'}>Tasks</span></div>
                </a>
                <a className={url.pathname === '/friends'? 'active' : ''} href={'/friends'}>
                    <div className={'icon'}>
                        <i className="fas fa-fw fa-users" aria-hidden={true}></i>
                    </div>
                    <div className={'name'}><span data-text={'Friends'}>Friens</span></div>
                </a>
            </nav>
        </div>
    );
};

export default Bottom;