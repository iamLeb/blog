import React from 'react';
import "../components/css/login.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    return (
        <section className="loginContainer">
            <div className="imageContainer">
                <h1 className="imageQuote">This is a text</h1>
                <img
                    src="https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""/>
            </div>
            <div className="form">
                <div className="formGroup">
                    <h1>Login</h1>
                </div>

                <div className="formGroup">
                    <input className="formControl" type="text" placeholder="Enter Email"/>
                </div>

                <div className="formGroup">
                    <input className="formControl" type="password" placeholder="Enter Password"/>
                </div>

                <button className="btn btn-primary"><FontAwesomeIcon icon={faKey}/> Login</button>
            </div>
        </section>
    );
};

export default Login;