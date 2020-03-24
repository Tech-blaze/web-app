import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import UserDashBoard from "./pages/userDashBoard";
import myMap from "./pages/map";
// firebase
import firebase from "firebase/app";
import firebaseConfig from "./config/firebaseConfig";
import axios from "axios";
import React, { Component, useState } from "react";

export class App extends Component {
  state = {
    user: { email: "sonu4dragon@gmail.com", password: "x1234x567xzy" },
    token: ""
  };
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }

  handleSubmit = event => {
    event.preventDefault();
    let history = withRouter({history});
    let email = this.state.user.email;
    let password = this.state.user.password;
    console.log(email, password);
    axios
      .post("/login", { email, password })
      .then(res => {
        console.log(res.data.token);
        this.setState({
          token:res.data.token
        })
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    event.persist();
    this.setState(state => {
      state.user = {
        ...state.user,
        [event.target.name]: [event.target.value]
      };
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <hr />
        <Switch>
          <Route path="/" exact render={()=>(<Home token={this.state.token}/>)} ></Route>
          <Route path="/about" exact component={About}></Route>

          <Route path="/login" exact render={() => <Login onSubmit={this.handleSubmit} user={this.state.user} handleChange={this.handleChange} />}></Route>

          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/user" exaxt render={() => <UserDashBoard token={this.state.token} />}></Route>
          <Route path="/map" exact component={myMap}></Route>
        </Switch>
      </div>
     
    );
  }
}

const About = () =>{
 
  let [about,setAbout] = useState('');
  const handleChange = event =>{
    setAbout(event.target.value);
  }
return ( <div><input type="text" value={about} onChange={handleChange}/>{about}</div> )
}
const Contact = () => <div>Contact</div>;
// const Home = ()=>( <div>HOME SONU</div> )
// const Login = () => <div>Login</div>;
// const SignUp = () => <div>SignUp</div>;

export default App;
