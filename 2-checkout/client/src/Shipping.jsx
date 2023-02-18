import React from "react";
import { render } from "react-dom";
import { Component } from 'react';
import ReactDOM from 'react-dom';
import Payment from './Payment.jsx';

class Shipping extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onClickApp: false,
      onClickAccount: false,
      onClickShipping: true,
      onClickPayment: false,
      name: this.props.stateFromAccount.name,
      username: this.props.stateFromAccount.username,
      password: this.props.stateFromAccount.password,
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: ''
    }
    this.hideMe = this.hideMe.bind(this);

  }
  hideMe() {
    let toHide = document.getElementsByClassName("hyde-again")[0]
    toHide.style.display = 'none';
  }


  render() {
    console.log('props from account', this.props)

    return (
      <div>
        <div className="hyde-again">
          <h1>Shipping</h1>
          <form>
            <label>Line 1</label>
            <input id="line1" type="text" value={this.state.line1} onChange={(event) => { event.preventDefault(); this.setState({ line1: event.target.value }) }}></input>
            <label>Line 2</label>
            <input id="line2" type="text" value={this.state.line2} onChange={(event) => { event.preventDefault(); this.setState({ line2: event.target.value }) }}></input>
            <label>City</label>
            <input id="city" type="text" value={this.state.city} onChange={(event) => { event.preventDefault(); this.setState({ city: event.target.value }) }}></input>
            <label>State</label>
            <input id="state" type="text" value={this.state.state} onChange={(event) => { event.preventDefault(); this.setState({ state: event.target.value }) }}></input>
            <label>Zipcode</label>
            <input id="zipcode" type="text" value={this.state.zipcode} onChange={(event) => { event.preventDefault(); this.setState({ zipcode: event.target.value }) }}></input>
          </form>
          <button onClick={() => { this.setState({ onClickPayment: true, onClickShipping: false }); this.hideMe() }}>Next</button>
        </div>
        {this.state.onClickPayment ? <Payment stateFromShipping={this.state} /> : null}
        {this.state.onClickAccount ? <Account /> : null}

      </div >
    )
  }
}

export default Shipping;