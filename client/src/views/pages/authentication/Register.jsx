import React from 'react';

const Register = () => {
    return (
        <div className="container-fluid login-wrapper">
            <div className="form">
                <h1 className="line-down">Register</h1>
                <div className="form-control">
                    <input type="email" placeholder="Full Name"/>
                </div>

                <div className="form-control">
                    <input type="email" placeholder="Email Address"/>
                </div>

                <div className="form-control">
                    <input type="password" placeholder="Enter Password"/>
                </div>

                <div className="form-control">
                    <input type="password" placeholder="Confirm Password"/>
                </div>

                <button className="btn btn-primary">Create Account</button>
            </div>
        </div>
    );
};

export default Register;