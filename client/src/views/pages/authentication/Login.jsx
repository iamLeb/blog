import React from 'react';

const Login = () => {
    return (
        <div className="container-fluid login-wrapper">
            <div className="form">
                <h1 className="line-down">Login</h1>
                <div className="form-control">
                    <input type="email" placeholder="Email Address"/>
                </div>

                <div className="form-control">
                    <input type="password" placeholder="Enter Password"/>
                </div>

                <button className="btn btn-primary">Login</button>
            </div>
        </div>
    );
};

export default Login;