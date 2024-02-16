import React from 'react';
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCaretDown, faPlus, faPlusSquare,
    faSignOut,
    faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

const AdminLinks = () => {
    const icon = { size: '2x', color: '#767f7e' };
    const navigate = useNavigate();

    const links = [
        {key: 1, name: 'Dashboard', onClick: () => navigate(''), icon: <FontAwesomeIcon icon={faTachometerAlt} color={icon.color}/>},
        {key: 2, name: 'Create Post', onClick: () => navigate('/admin/post'), icon: <FontAwesomeIcon icon={faPlus} color={icon.color}/>},
        {key: 3, name: 'Category', onClick: () => navigate('/admin/post'), icon: <FontAwesomeIcon icon={faPlusSquare} color={icon.color}/>},
        {key: 4, name: 'Sign out', onClick: () => navigate('/admin/signOut'), icon: <FontAwesomeIcon icon={faSignOut} color={icon.color}/>},
    ];
    return (
        <>
            {links.map((link) => (
                <p key={link.key} onClick={link.onClick}>{link.icon} {link.name}</p>
            ))}
        </>
    );
};

export default AdminLinks;

