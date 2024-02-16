import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../admin/components/Header.jsx";

const Admin = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Admin;