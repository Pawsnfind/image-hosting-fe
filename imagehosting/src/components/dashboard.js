import React from "react";
import {dafuxHOC, DaFux} from "./dafux";
import './dashboard.css';

 class Dashboard extends React.Component {

    constructor(props){
        super(props);
        DaFux.addComponent(this);
        this.props.auth.authenticate();
    }
    
    render() {
        return(
        <div className="dashboard">
           
                {this.state && this.state.api_key   && <div className='api_key'>API KEY: {this.state.api_key} </div>}
        
        </div>
    );
  }
};

export default dafuxHOC(Dashboard);