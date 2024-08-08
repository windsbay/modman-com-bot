import React from 'react';
import './Bottom.css';
import {redirect} from "react-router-dom";

const Bottom = () => {
    return (
        <div className="bottom">
            <ul>
                <li>
                    <a href="/">
                        <div className="icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="name"><span data-text="Home">Home</span></div>
                    </a>
                </li>
                <li>
                    <a href="/tasks">
                        <div className="icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="name"><span data-text="Tasks">Tasks</span></div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <div className="icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="name"><span data-text="Friends">Friends</span></div>
                    </a>
                </li>
                <li aria-disabled={true}>
                    <a href="/wallet">
                        <div className="icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="name"><span data-text="Home">Home</span></div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Bottom;