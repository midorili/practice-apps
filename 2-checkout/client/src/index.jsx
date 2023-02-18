import React from "react";
import { render } from "react-dom";
import { Component } from 'react';
import ReactDOM from 'react-dom';
import Account from './Account.jsx';
import Shipping from './Shipping.jsx';
import Payment from './Payment.jsx';
import Added from './Added.jpg'
import Confirmation from './Confirmation.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClickApp: true,
      onClickAccount: false,
      onClickShipping: false,
      onClickPayment: false,
      onClickConfirmation: false,
      name: '',
      username: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      credit: '',
      cvv: '',
      expiry: '',
      billingZip: ''
    }
    this.hideMe = this.hideMe.bind(this);
  }


  hideMe() {
    let toHide = document.getElementsByClassName("hide-me")[0]
    toHide.style.display = 'none';
  }

  render() {
    return (
      <div>
        <div className="hide-me">
          <img src={Added} />
          <p >
            <code >Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
          </p>
          <button onClick={() => { this.setState({ onClickAccount: true, onClickApp: false }); this.hideMe() }}>Checkout</button>
        </div >

        {this.state.onClickAccount ? <Account accountState={this.state.onClickAccount} /> : null}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"))

export default App;
// <Account
// currentForm={this.state.currentForm}
// handleChange={this.handleChange}
// name={this.state.name}
// username={this.state.username}
// password={this.state.password}
// />
// <Shipping
// currentForm={this.state.currentForm}
// handleChange={this.handleChange}
// line1={this.state.line1}
// line2={this.state.line2}
// city={this.state.city}
// state={this.state.state}
// zipcode={this.state.zipcode}
// />
// <Payment
// currentForm={this.state.currentForm}
// handleChange={this.handleChange}
// credit={this.state.credit}
// cvv={this.state.cvv}
// expiry={this.state.expiry}
// billingZip={this.state.billingZip}

// />

  // next() {
  //   let currentForm = this.state.currentForm;
  //   currentForm = currentForm >= 2 ? 3 : currentForm + 1
  //   this.setState({
  //     currentForm: currentForm
  //   })
  // }

  // back() {
  //   let currentForm = this.state.currentForm;
  //   currentForm = currentForm <= 1 ? 1 : currentForm + 1
  //   this.setState({
  //     currentForm: currentForm
  //   })
  // }
  // nextButton() {
  //   let currentForm = this.state.currentForm;
  //   if (currentForm !== 1) {
  //     return (
  //       <button type="button" onClick={this.next}>Next</button>
  //     )
  //   }
  //   return null;
  // }

  // backButton() {
  //   let currentForm = this.state.currentForm;
  //   if (currentForm < 3) {
  //     return (
  //       <button type="button" onClick={this.back}>Back</button>
  //     )
  //   }
  //   return null;
  // }

  // handleChange = (event) => {
  //   //forEach and map for more than one name/value pair
  //   const name = event.target.name;
  //   const value = event.target.value
  //   this.setState({
  //     name: value
  //   })
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   const email = this.state.email;
  //   const username = this.state.username;
  //   const password = this.state.password;
  //   const line1 = this.state.line1
  //   const line2 = this.state.line2
  //   const city = this.state.city
  //   const state = this.state.state
  //   const zipcode = this.state.zipcode
  //   const credit = this.state.credit
  //   const cvv = this.state.cvv
  //   const expiry = this.state.expiry
  //   const billingZip = this.state.billingZip
  //   console.log('submitted')
  // }
