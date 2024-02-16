import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from "./Logo.jsx";
import Links from "./Links.jsx";

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [toggle, setToggle] = useState(false);

    const icon = { size: '2x', color: '#767f7e' };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        // Initial check on mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleToggle = () => {
        setToggle(!toggle);

        const sideBar = document.querySelector('.sideBar');
        const postsContainer = document.querySelector('.postsContainer');

        if (toggle) {
            sideBar.style.opacity = "0";
            postsContainer.style.opacity = "1";

            setTimeout(() => {
                sideBar.style.visibility = "hidden";
            }, 500); // Adjust the duration to match your CSS transition duration
        } else {
            sideBar.style.display = "block";
            sideBar.style.visibility = "visible";
            sideBar.style.opacity = "1";
            postsContainer.style.opacity = "0.1";
        }
    };

    return (
        <>
            <Logo />
            {isMobile ? (
                <div className="hamburger" onClick={handleToggle}>
                    {toggle ? (
                        <FontAwesomeIcon icon={faTimes} size={icon.size} color={icon.color} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} size={icon.size} color={icon.color} />
                    )}
                </div>
            ) : (
                <div className="menu-link">
                    <Links/>
                </div>
            )}
        </>
    );
};

export default Nav;
