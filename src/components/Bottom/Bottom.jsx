import React from 'react';
import './Bottom.css';

const Bottom = () => {
    return (
        <div className="bottom">
            <input type="radio" id="one" name="buttons" checked/>
            <label htmlFor="one" className="icons home"><span className="glyphicon glyphicon-home"></span></label>
            <input type="radio" id="two" name="buttons"/>
            <label htmlFor="two" className="icons search"><span className="glyphicon glyphicon-list-alt"></span></label>
            <input type="radio" id="three" name="buttons" />
            <label htmlFor="three" className="icons heart"><span className="glyphicon glyphicon-fire"></span></label>
            <input type="radio" id="four" name="buttons" disabled={true}/>
            <label htmlFor="four" className="icons bell"><span className="glyphicon glyphicon-btc"></span></label>
            <div id="box">
            </div>
            <div id="body"></div>
            <span className="title home">Home</span>
            <span className="title search">Tasks</span>
            <span className="title heart">Friends</span>
            <span className="title bell">Wallet</span>
            <div className="border"></div>
            <div className="effect"></div>
        </div>
    );
};

export default Bottom;