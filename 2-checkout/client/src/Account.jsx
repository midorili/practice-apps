import React from "react";
import { render } from "react-dom";
import { Component } from 'react';
import ReactDOM from 'react-dom';
import Shipping from './Shipping.jsx';
import App from './index.jsx'


class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      onClickApp: false,
      onClickShipping: false,
      onClickAccount: true,
      name: '',
      username: '',
      password: '',
    }
    this.hideMe = this.hideMe.bind(this);

  }
  hideMe() {
    let toHide = document.getElementsByClassName("hyde")[0]
    console.log('hydeme', toHide)
    toHide.style.display = 'none';
  }

  render() {
    console.log('p account', this.props)

    return (
      <div>
        <div className="hyde">
          <h1 className="hyde">Create an Account</h1>
          <form className="hyde">
            <label>Name</label>
            <input id="name" type="text" value={this.state.name} onChange={(event) => { event.preventDefault(); this.setState({ name: event.target.value }) }}></input>
            <label>Username/Email</label>
            <input id="username-email" type="text" value={this.state.username} onChange={(event) => { event.preventDefault(); this.setState({ username: event.target.value }) }}></input>
            <label>Password</label>
            <input id="password" type="text" value={this.state.password} onChange={(event) => { event.preventDefault(); this.setState({ password: event.target.value }) }}></input>
          </form>
          <button className="hyde" onClick={() => { this.setState({ onClickShipping: true, onClickAccount: false }); this.hideMe() }}>Next</button>
        </div>
        {this.state.onClickShipping ? <Shipping stateFromAccount={this.state} /> : null}
        {this.state.onClickApp ? <App /> : null}

      </div >
    )
  }
}

export default Account;