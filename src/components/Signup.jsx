import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="form-sec">
        <h2 className="form-title title">User Signup</h2>
        <form action="user/singup" method="post">
          <div>
            <span className="material-icons">person</span>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <span className="material-icons">email</span>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <span className="material-icons">lock</span>
            <input type="password" placeholder="Password" />
          </div>
          <button>SIGN UP</button>
          <span className="forgot-link">
            Need <a href="#">Help To Signup?</a>
          </span>
        </form>
      </div>
    );
  }
}

export default Signup