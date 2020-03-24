import React, { Component } from "react";
import logo from "../icons/store_mall.svg";
import {NavLink } from "react-router-dom";

const style = {
  width:"112",
  height:"28"
}

export class Navbar extends Component {

  componentDidMount(){
    document.addEventListener('DOMContentLoaded',()=>{
      let burger = document.querySelector('.navbar-burger');
      let  target = burger.getAttribute('data-target');
      let targetElement = document.getElementById(target);
      burger.addEventListener('click',()=>{
      burger.classList.toggle('is-active');
      targetElement.classList.toggle('is-active');
      });


    })
  }

  render() {
    return (
      <nav className="navbar is-transparant is-marginless">
        <div className="navbar-brand">
        <div className="navbar-item"  >
      <img src={logo} style={style} alt="logo" /></div>
      <div className="navbar-burger burger" data-target ="navbar-basic">
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>
      

        <div className="navbar-menu" id="navbar-basic">
          <div className="navbar-start">
            <NavLink to="/" className="navbar-item">
              Home
            </NavLink>
          </div>
          <div className="navbar-end">
            <NavLink to="/login" className="navbar-item">
              Login
            </NavLink>
            <NavLink to="/about" className="navbar-item">
              About
            </NavLink>
            <NavLink to="/contact" className="navbar-item">
              Contact
            </NavLink>

            <NavLink to="/signup" className="navbar-item">
              SignUp
            </NavLink>
            <NavLink to="/user" className="navbar-item">
              User  DashBoard
            </NavLink>

            <NavLink to="/map" className="navbar-item">
             Map
            </NavLink>

          </div>
        </div>

        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">  
            <SignUp />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch> */}
      </nav>
    );
  }
}

export default Navbar;
