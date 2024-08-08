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
                </ul>
        </div>
    );
};

export default Bottom;