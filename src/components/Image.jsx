import React, { Component } from 'react'

class Image extends Component {
    render() {
        return <div className="image-sec">
        <a
          href="https://www.freevector.com/cyber-guardian-30637#"
          target="_blank"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/CyberGuardian.png"}
            alt="login form"
          />
        </a>
      </div>
    }
}

export default Image