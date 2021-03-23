// reference:took help from friend and google
import React,{ Component } from 'react';
import './App.css';

import {Button,Form,FormGroup,Label,Input}
from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
class EntryPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: "logIn"
    }
  }
  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }
  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (

          <form className="body">
            <h2 className="body1">Sign Up</h2>
            <fieldset className="content-div">
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button id="sum">Submit</button><p></p>
            <button id="log" type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
        )
        break
      case "logIn":
        return (<form className="body"><h2 className="body1">Yahoo!</h2>
            <fieldset className="content-div">
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
                <li>
                  <i/>
                  <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button id="sum"type="button" onClick={ () => this.changeView("success_sign_in")}>Login</button><p> </p>
            <button id="sum"type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
            </form>
        )
        break
        case "success_sign_in":
          return (
            <div>
              <h2 id="result">successfully loggedin</h2>
            </div>
          )
          break
      case "PWReset":
        return (
          <form>
          <h2>Reset Password</h2>
          <fieldset>
            <legend>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label for="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
        )
      default:
        break
    }
  }
  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}
export default EntryPage;