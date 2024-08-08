import React from 'react';
import './Bottom.css';

const Bottom = () => {

    return (
        <div>
            <nav>
                <a href={'/tasks'}>
                    <div className={'icon'}>
                        <i className="fas fa-fw fa-tasks" aria-hidden={true}></i>
                    </div>
                    <div className={'name'}><span data-text={'Tasks'}>Tasks</span></div>
                </a>
                <a className="active" href="/">
                    <div className={'icon'}>
                        <i className="fas fa-fw fa-home" aria-hidden={true}></i>
                    </div>
                </a>
                <a href={'/friends'}>
                    <div className={'icon'}>
                        <i className="fas fa-fw fa-users" aria-hidden={true}></i>
                    </div>
                    <div className={'name'}><span data-text={'Friends'}>Friends</span></div>
                </a>
            </nav>
        </div>
    );
};

export default Bottom;