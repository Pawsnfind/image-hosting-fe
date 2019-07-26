import React from "react";
import NavBar from './navbar';
import {dafuxHOC, DaFux} from "./dafux";

export default class Login extends React.Component {

    constructor(props){
        super(props);
        DaFux.addComponent(this);
        this.props.auth.authenticate();
    }
    
 
  render() {
    return(
        
       <div className="authenticate">
           <NavBar auth={this.props.auth} />

      Authenticating
      </div>
    );
  }
};

