import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { map } from 'rsvp';
import LoginUser from './actionCreators';

class App extends Component {

  state = {
    email:"",
    password:""
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const {LoginUser}=this.props
    LoginUser(this.state)

  }
  handleChange=(e)=>{
   this.setState({
     [e.target.name]:e.target.value
   })
  }
 
  render() {
    console.log(this.state)
    return (
      <div className="App">

        <form onSubmit={this.handleSubmit}>
          <input name="email" type="email" placeholder="email" onChange={this.handleChange} />
          <input name="password" type="password" placeholder="password" onChange={this.handleChange} />
          <input type="submit" value="login" />
        </form>
       
      </div>
    );
  }
}
const mapStateToProps = (state) => {

  return {
    loginState: state.loginReducer
  }
}

export default connect(mapStateToProps,{LoginUser})(App);
