import React, { Component } from "react";

//styles
import "./Form.css";

import Image from './Image'
import Login from './Login'
import Signup from './Signup'

var element = ''

window.onload = () => {
    element = document.querySelector('.send-to a')
    element.addEventListener('click', () => {
        if (element.id === 'login') {
            element.id = 'signup'
        } else {
            element.id = 'login'
        }
    })
}

function FormControll() {
    if (element.id === 'login') {
        return <Login />
    } else {
        return <Signup />
    }
}

class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            currentForm : 'login'
        }
    }

    changeForm = () => {
        if (element.id === 'login') {
            this.setState({currentForm: 'login'})
        } else {
            this.setState({currentForm: 'signup'})
        }
    }

  render() {
    return (
      <div className="container">
        <div className="form-wrapper">
            <Image />
            {this.state.currentForm === 'login' ? <Login /> : <Signup />}
            <span className="send-to">
            <a href="#" className="login" id="login" style={{bottom: '20px'}} onClick={this.changeForm}>
              {this.state.currentForm === 'login' ? 'Create An Account' : 'Already Have An Account'}
              <sapn className="material-icons">arrow_right_alt</sapn>
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Form;
