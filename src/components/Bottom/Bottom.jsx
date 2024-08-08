import React from 'react';
import './Bottom.css';
import {redirect} from "react-router-dom";

const Bottom = () => {
    return (
        <div className="bottom">
                <ul>
                        <li>
                                <a href="/">
                                        <!-- this anchor text for link your home to another page -->
                                        <div className="icon">
                                                <i className="fa fa-home" aria-hidden="true"></i><!-- this is home icon link get form fornt-awesome icon for home button -->
                                                <i className="fa fa-home" aria-hidden="true"></i><!-- copy and paste the home icon link here for hover effect -->
                                        </div>
                                        <div className="name"><span data-text="Home">Home</span></div>
                                        <!-- we are create first menu item name home -->
                                </a>
                        </li>
                </ul>
        </div>
    );
};

export default Bottom;