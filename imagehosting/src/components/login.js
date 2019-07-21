import React from "react";
import NavBar from './navbar';

export default class Login extends React.Component {

    componentDidMount(){
        
       
    }
 
  render() {
    return(
        
       <div className="login">
           <NavBar auth={this.props.auth} />

      Login
      </div>
    );
  }
};

