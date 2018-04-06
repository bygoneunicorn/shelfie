import React from 'react';
import './Header.css';

export default function Header(){
        return(
            <div className="header">
                <img className="logo" src={require("./shelfie.png")} alt="Shelfie Logo"/>
                <h1 className="shelfie-text">SHELFIE</h1>
            </div>
        )
}