import React from 'react';
import "./css/header.css";
import AdminLinks from "./AdminLinks.jsx";

const Header = () => {
    return (
        <header className="adminHeader">
            <div className="left">
                <h2>iamLeb</h2>
            </div>

            <div className="right">
                <AdminLinks />
            </div>
        </header>
    );
};

export default Header;