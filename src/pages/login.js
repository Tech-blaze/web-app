import React, { Component } from "react";

// firebase imports
import "firebase/auth";
import { NavLink, useHistory } from "react-router-dom";



export class login extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="section">
        <div className="columns is-centered ">
          <div className="column is-two-fifths">
            <div className="title has-text-centered">Login</div>
            <div className="container">
              <form onSubmit={this.props.onSubmit} autoComplete="off" >
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" name="email" placeholder="Email" onChange={this.props.handleChange}  value={this.props.user.email}/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input" type="password" name="password" placeholder="Password"  onChange={this.props.handleChange} value={this.props.user.password}/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="button is-primary" type="submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="column has-text-centered">
              <div className="title">Sign Up</div>
              <div>
                <NavLink className="button is-danger" to="/signup">Sign Up</NavLink>
              </div>
          </div>
        </div>
      </div>
    );
  }
}


export default login;
