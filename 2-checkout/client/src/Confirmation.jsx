import React from "react";
import { render } from "react-dom";
import { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './index.jsx';
import $ from 'jquery';

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClickApp: false,
      onClickAccount: false,
      onClickShipping: false,
      onClickPayment: false,
      onClickConfirmation: true,
      name: this.props.stateFromPayment ? this.props.stateFromPayment.name : this.props.stateApp.name,
      username: this.props.stateFromPayment ? this.props.stateFromPayment.username : this.props.stateApp.payment,
      password: this.props.stateFromPayment ? this.props.stateFromPayment.password : this.props.stateApp.password,
      line1: this.props.stateFromPayment ? this.props.stateFromPayment.line1 : this.props.stateApp.line1,
      line2: this.props.stateFromPayment ? this.props.stateFromPayment.line2 : this.props.stateApp.line2,
      city: this.props.stateFromPayment ? this.props.stateFromPayment.city : this.props.stateApp.city,
      state: this.props.stateFromPayment ? this.props.stateFromPayment.state : this.props.stateApp.state,
      zipcode: this.props.stateFromPayment ? this.props.stateFromPayment.zipcode : this.props.stateApp.zipcode,
      credit: this.props.stateFromPayment ? this.props.stateFromPayment.credit : this.props.stateApp.credit,
      expiry: this.props.stateFromPayment ? this.props.stateFromPayment.expiry : this.props.stateApp.expiry,
      cvv: this.props.stateFromPayment ? this.props.stateFromPayment.cvv : this.props.stateApp.cvv,
      billingZip: this.props.stateFromPayment ? this.props.stateFromPayment.billingZip : this.props.stateApp.billingZip
    }
    this.hideMe = this.hideMe.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  hideMe() {
    let toHide = document.getElementsByClassName("hide-confirmation")[0]
    toHide.style.display = 'none';
  }

  handleSubmit() {
    $.ajax({
      url: 'http://localhost:3000/purchase',
      method: "POST",
      data: {
        name: this.props.stateFromPayment.name,
        username: this.props.stateFromPayment.username,
        password: this.props.stateFromPayment.password,
        line1: this.props.stateFromPayment.line1,
        line2: this.props.stateFromPayment.line2,
        city: this.props.stateFromPayment.city,
        state: this.props.stateFromPayment.state,
        zipcode: this.props.stateFromPayment.zipcode,
        credit: this.props.stateFromPayment.credit,
        expiry: this.props.stateFromPayment.expiry,
        cvv: this.props.stateFromPayment.cvv,
        billingZip: this.props.stateFromPayment.billingZip
      },
      success: () => {
        console.log('success from post')
      },
      error: () => {
        console.log('error from post')
      }
    })
  }


  render() {
    console.log('props from confirmation', this.props)
    return (
      <div>
        <div className="hide-confirmation" >
          <h1>Confirmation</h1>
          <div>Name: {this.state.name}</div>
          <div>Email:{this.state.username}</div>
          <div>Address:{this.state.line1}</div>
          <div>City:{this.state.city}</div>
          <div>State:{this.state.state}</div>
          <div>Zipcode:{this.state.zipcode}</div>
          <div>Credit:{this.state.credit}</div>
          <div>CVV:{this.state.cvv}</div>
          <button onClick={() => { this.setState({ onClickApp: true }); this.hideMe(); this.handleSubmit() }}>Purchase</button>
        </div >
        {this.state.onClickApp ? <App stateFromConfirmation={this.state} /> : null}
      </div >
    )
  }
}

export default Confirmation;