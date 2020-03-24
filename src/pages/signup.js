import React, { Component } from 'react'
import firebase  from  'firebase/app' ;
import 'firebase/auth'
 class signup extends Component {

    state={
        email:"",
        password:""
    }
    handleChange = event =>{
        this.setState({
          [event.target.name]:[event.target.value]
        })
      }
      handleSubmit = (event)=>{
        event.preventDefault();
        let email  = String(this.state.email);
        let password = String(this.state.password);
        console.log(email,password);
        firebase.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
            console.log(user);
        }).catch(err=>{
            console.log(err);
        })
      }
      
    render() {
        return (
            <div className="section">
            <div className="title has-text-centered" style={{marginTop:"0 auto"}}>Sign Up</div>
                <form className="container" action="/login">
                <div className="field">
                    <div className="control">
                        <input className="input" type="email" placeholder="Email" name="email" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input" type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input" type="password" placeholder="Confirm Password" />
                    </div>
                </div>
                <div className="field is-grouped is-grouped-centered"  >
                    <div className="control">
                        <input className="button is-link" type="submit" onClick={this.handleSubmit}/>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

export default signup
