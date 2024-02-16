import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    return (
        <section className="loginContainer">

            <div className="form">
                <div className="formGroup">
                    <h1>Create Account</h1>
                </div>

                <div className="holdInputs">
                    <div className="formGroup">
                        <input className="formControl" type="text" placeholder="Full Name"/>
                    </div>

                    <div className="formGroup">
                        <input className="formControl" type="email" placeholder="Enter Email"/>
                    </div>

                    <div className="formGroup">
                        <input className="formControl" type="password" placeholder="Enter Password"/>
                    </div>
                </div>

                <button className="btn btn-primary"><FontAwesomeIcon icon={faKey}/> Register</button>
            </div>

            <div className="imageContainer">
                <h1 className="imageQuote">This is a text</h1>
                <img
                    src="https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""/>
            </div>
        </section>
    );
};

export default Register;