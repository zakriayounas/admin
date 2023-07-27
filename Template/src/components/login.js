import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const logEmail = (event) => {
    setEmail(event.target.value);
  };

  const logPassword = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    if (email && password) { // Check if both inputs are filled
      fetch(`http://localhost:3000/login/?q=${email,password}`).then((data) => {
        data.json().then((resp) => {
          console.warn('resp', resp);

          if (resp.length > 0) {
            navigate('/home');
            localStorage.setItem('login', JSON.stringify(resp));
          } else {
            alert("Please enter a valid username or password");
          }
        });
      });
    } else {
      alert("Please fill in both the username and password");
    }
  };


    return (
        <div className="hold-transition login-page">
       <div className="login-box">
  <div className="login-logo">
    <a href=""><b>Admin</b>LTE</a>
  </div>

  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>

        <div className="input-group mb-3">
          <input type="text" className="form-control" onChange={logEmail} value={email} placeholder="email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" onChange={logPassword} value={password}  className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
         
    
          <div className="col-4">
            <button type="Submit" onClick={login} className="btn btn-primary btn-block">Log In</button>
          </div>

        </div>

    
      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a href="register.html" className="text-center">Register a new membership</a>
      </p>
    </div>
    
  </div>
</div>



        </div>
    )
}

export default Login