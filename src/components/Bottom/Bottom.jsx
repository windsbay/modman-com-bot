import React from 'react';
import './Bottom.css';

const Bottom = () => {
    return (
        <div>
            <nav>
                <a className="active" href="/">
                    <div className={'icon'}>
                        <i className="fas fa-fw fa-home" aria-hidden={true}></i>
                    </div>
                    <div className={'name'}><span data-text={'Home'}>Home</span></div>
                </a>
                <a href={'/tasks'}>
                    <div className={'icon'}>
                        <i className="fas fa-fw fa-code" aria-hidden={true}></i>
                    </div>
                    <div className={'name'}><span data-text={'Tasks'}>Tasks</span></div>
                </a>
                <a href={'/friends'}>
                    <div className={'icon'}>
                        <i className="fas fa-fw fa-briefcase" aria-hidden={true}></i>
                    </div>
                    <div className={'name'}><span data-text={'Friends'}>Friends</span></div>
                </a>
                <a>
                    <div className={'icon'}>
                        <i className="fas fa-fw fa-briefcase" aria-hidden={true}></i>
                    </div>
                    <div className={'name'}><span data-text={'Wallet'}>Wallet</span></div>
                </a>
            </nav>
        </div>
    );
};

export default Bottom;