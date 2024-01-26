import React from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <h1>iamLeb</h1>
            <div className="links">
                <p onClick={() => navigate('/')}>Home</p>
                <p onClick={() => navigate('/')}>About</p>
                <p onClick={() => navigate('/')}>Contact</p>
            </div>
        </header>
    );
};

export default Header;