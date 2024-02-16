import React from 'react';
import {faTachometerAlt, faChartBar, faPhone, faUnlockKeyhole, faSignIn} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

const Links = () => {
    const icon = { size: '2x', color: '#767f7e' };
    const navigate = useNavigate();

    const links = [
        {key: 1, name: 'Home', onClick: () => navigate('/'), icon: <FontAwesomeIcon icon={faTachometerAlt} color={icon.color}/>},
        // {key: 2, name: 'About', onClick: () => navigate('/about'), icon: <FontAwesomeIcon icon={faChartBar} color={icon.color}/>},
        // {key: 3, name: 'Contact', onClick: () => navigate('/contact'), icon: <FontAwesomeIcon icon={faPhone} color={icon.color}/>},
        {key: 4, name: 'Login', onClick: () => navigate('/login'), icon: <FontAwesomeIcon icon={faSignIn} color={icon.color}/>},
        {key: 5, name: 'Sign up', onClick: () => navigate('/register'), icon: <FontAwesomeIcon icon={faUnlockKeyhole} color={icon.color}/>},
    ];
    return (
        <>
            {links.map((link) => (
                <p key={link.key} onClick={link.onClick}>{link.icon} {link.name}</p>
            ))}
        </>
    );
};

export default Links;