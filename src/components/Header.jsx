import React from 'react';
import './Header.css';
import cotafpv from './cotafpv.png';
import cotafpvVideo from '../video/CotaFPV.webm';
import scrool from '../img/scrool.png';

const Header = () => {
    return (
        <div>
            <header className="header">
                {/* <img src={cotafpv} className="Header-logo" alt="logo CotaFPV" /> */}
                <video class="Header-logo" src={cotafpvVideo} autoPlay ></video>
                <img src={scrool} className="Header-scrool" alt="Icone Screel" />
            </header>
        </div>
    );
}

export default Header;
