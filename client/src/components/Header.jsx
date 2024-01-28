import React from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <h2 className="line-down">iamLeb</h2>
            <div className="links">
                <p onClick={() => navigate('/')}>Home</p>
                <p onClick={() => navigate('/login')}>Login</p>
                <p onClick={() => navigate('/register')}>Register</p>
            </div>
        </header>
    );
};

export default Header;