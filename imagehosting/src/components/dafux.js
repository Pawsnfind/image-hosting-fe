
import React from "react";
import Auth from './auth';

let DaFux = null;

const dafuxHOC = (Component) => {

  return class  extends React.Component{
   
    constructor(props){
        super(props);
        DaFux = this;
        this.auth = new Auth();
        this.components = [];
        this.state = null;
    }

    
    componentWillUpdate(prevProps, prevState){
        this.updateComponents();
    }

    updateComponents = () => {
        this.components.forEach(component => component.setState(this.state));

    }
    async addComponent(component){
        this.components.push(component);
        await component.setState(this.state);
        this.updateComponents();
    }

    async addValue(key, value){
        await this.setState({...this.state, [key]: value});
        this.updateComponents();
    }

    render() {
        return <Component auth={this.auth} data={this.state}/>;
    }
}
};


dafuxHOC(DaFux)

export  {dafuxHOC, DaFux} ;