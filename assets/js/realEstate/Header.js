import React, {Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (<header>
      <div className="logo">Central Florida Real Estate Lite</div>
      <nav>
        <a href="#">Create</a>
        <a href="#">About Us</a>
        <a href="#">Log In</a>
        <a href="#"className="register-btn">Register</a>
      </nav>
    </header>)
  }
}
