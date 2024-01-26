import React from 'react';
import Header from "../../components/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer.jsx";

const Front = () => {
    return (
        <>
            <Header />
                <Outlet/>
            <Footer />
        </>
    );
};

export default Front;