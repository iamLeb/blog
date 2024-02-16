import React from 'react';
import Posts from "../components/Posts.jsx";
import "../components/css/sidebar.css"
import Logo from "../components/Logo.jsx";
import Links from "../components/Links.jsx";

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            console.log('Here');
        } else {
            console.log('Not here');
        }
    });
});

// document.addEventListener('contextmenu',  (event) => {
//     // Prevent the default context menu from appearing
//     event.preventDefault();
//
//     // Check if the right mouse button was clicked
//     if (event.button === 2) {
//         alert('Right-click detected!');
//     }
// });

const Home = () => {
    return (
        <main className="home-container">
            <Posts/>
        </main>
    );
};

export default Home;