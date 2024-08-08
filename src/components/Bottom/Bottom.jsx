import React from 'react';
import './Bottom.css';
import {redirect} from "react-router-dom";

const Bottom = () => {
    return (
        <div>
            <nav>
                <a className="active" href="/"><i className="fas fa-fw fa-home"></i> Home</a>
                <a href="/tasks"><i className="fas fa-fw fa-code"></i> Tasks</a>
                <a href="/friends"><i className="fas fa-fw fa-briefcase"></i> Friends</a>
            </nav>
        </div>
    );
};

export default Bottom;