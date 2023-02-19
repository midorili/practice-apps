import React from "react";
import { render } from "react-dom";
import { Component } from 'react';
import ReactDOM from 'react-dom';
import Confirmation from './Confirmation.jsx'

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onClickApp: false,
      onClickShipping: false,
      onClickConfirmation: false,
      onClickPayment: true,
      name: this.props.stateFromShipping.name,
      username: this.props.stateFromShipping.username,
      password: this.props.stateFromShipping.password,
      line1: this.props.stateFromShipping.line1,
      line2: this.props.stateFromShipping.line2,
      city: this.props.stateFromShipping.city,
      state: this.props.stateFromShipping.state,
      zipcode: this.props.stateFromShipping.zipcode,
      credit: '',
      expiry: '',
      cvv: '',
      billingZip: ''
    }
    this.hideMe = this.hideMe.bind(this);

  }
  hideMe() {
    let toHide = document.getElementsByClassName("hide-payment")[0]
    toHide.style.display = 'none';
  }

  render() {
    console.log('props from shipping', this.props.stateFromShipping)

    return (
      <div>
        < div className="hide-payment" >
          <h1>Payment Details</h1>
          <form >
            <label>Credit Card Number</label>
            <input id="credit" type="text" value={this.state.credit} onChange={(event) => { event.preventDefault(); this.setState({ credit: event.target.value }) }}></input>
            <label>Expiry Date</label>
            <input id="expiry" type="text" value={this.state.expiry} onChange={(event) => { event.preventDefault(); this.setState({ expiry: event.target.value }) }}></input>
            <label>CVV</label>
            <input id="cvv" type="text" value={this.state.cvv} onChange={(event) => { event.preventDefault(); this.setState({ cvv: event.target.value }) }}></input>
            <label>Billing Zip</label>
            <input id="billing-zip" type="text" value={this.state.billingZip} onChange={(event) => { event.preventDefault(); this.setState({ billingZip: event.target.value }) }}></input>
          </form>
          <button onClick={() => { this.setState({ onClickConfirmation: true }); this.hideMe() }}>Next</button>
        </div>
        {this.state.onClickConfirmation ? <Confirmation stateFromPayment={this.state} /> : null}
        {/* {this.state.onClickShipping ? <Shipping /> : null} */}
      </div >
    )
  }
}

export default Payment;