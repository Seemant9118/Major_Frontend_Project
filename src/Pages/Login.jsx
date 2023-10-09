import React from "react";

const Login = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <h1>Login Your Account</h1>
                    <p>Login your Account and start exploring the Auction Fresh System</p>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login