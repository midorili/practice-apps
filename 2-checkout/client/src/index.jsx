import React from "react";
import { render } from "react-dom";
import { Component } from 'react';
import ReactDOM from 'react-dom';
import Account from './Account.jsx';
import Shipping from './Shipping.jsx';
import Payment from './Payment.jsx';
import Added from './Added.jpg';
import Confirmation from './Confirmation.jsx';
import $ from 'jquery';


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
    this.pageLoad = this.pageLoad.bind(this);
  }


  pageLoad() {
    $.ajax({
      url: 'http://localhost:3000/purchase',
      method: "GET",
      success: (data) => {
        console.log('success from get', data)
        if (data) {
          this.setState({
            onClickApp: false,
            onClickAccount: false,
            onClickShipping: false,
            onClickPayment: false,
            onClickConfirmation: true,
            name: data.name,
            username: data.username,
            password: data.password,
            line1: data.line1,
            line2: data.line2,
            city: data.city,
            state: data.state,
            zipcode: data.zipcode,
            credit: data.credit,
            expiry: data.expiry,
            cvv: data.cvv,
            billingZip: data.billingZip
          })
        }
      },
      error: () => {
        console.log('user not found')
      }
    })
  }

  hideMe() {
    let toHide = document.getElementsByClassName("hide-me")[0]
    toHide.style.display = 'none';
    //change this to state
  }

  render() {
    return (
      <div>
        <div className="hide-me">
          <img src={Added} />
          <p >
            <code >Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
          </p>
          <button onClick={() => { this.setState({ onClickAccount: true }); this.hideMe(); this.pageLoad() }}>Checkout</button>
        </div >
        {this.state.onClickAccount ? <Account accountState={this.state.onClickAccount} /> : null}
        {this.state.onClickConfirmation ? <Confirmation stateApp={this.state} /> : null}

      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"))

export default App;
