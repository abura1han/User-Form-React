import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="form-sec">
        <h2 className="form-title title">User Login</h2>
        <form action="user/login" method="post">
          <div>
            <span className="material-icons">email</span>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <span className="material-icons">lock</span>
            <input type="password" placeholder="Password" />
          </div>
          <button>LOGIN</button>
          <span className="forgot-link">
            Forgot <a href="#">Login Details?</a>
          </span>
        </form>
      </div>
    );
  }
}

export default Login