import React from 'react';
import Links from "./Links.jsx";

const Aside = () => {
    return (
        <aside className="sideBar">
            <div className="sideLinks">
                <Links/>
            </div>
        </aside>
    );
};

export default Aside;