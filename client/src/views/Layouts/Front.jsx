import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Links from "../../components/Links.jsx";
import Aside from "../../components/Aside.jsx";

const Front = () => {
    return (
        <div>
            <Header/>
            <Aside />
            <Outlet/>
            {/*<Footer/>*/}
        </div>
    );
};

export default Front;