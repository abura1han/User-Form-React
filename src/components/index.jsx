import React, { Component } from "react";

//styles
import "./Form.css";

import Image from "./Image";
import Login from "./Login";
import Signup from "./Signup";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentForm: "login",
    };
  }

  changeForm = () => {
    if (this.state.currentForm === "login") {
      this.setState({ currentForm: "signup" });
    } else {
      this.setState({ currentForm: "login" });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="form-wrapper">
          <Image />
          {this.state.currentForm === "login" ? <Login /> : <Signup />}
          <span className="send-to">
            <a
              href="#"
              className="login"
              style={{ bottom: "20px" }}
              onClick={this.changeForm}
            >
              {this.state.currentForm === "login"
                ? "Create An Account"
                : "Already Have An Account"}
              <sapn className="material-icons">arrow_right_alt</sapn>
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Form;
