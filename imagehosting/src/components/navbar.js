import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
   
    }

    logout = () => {
        window.localStorage.removeItem('auth');
        this.props.history.push('/');
    }

    login = () => {
        this.props.auth.login();
    }

    render() {
        return (
            <React.Fragment>
            <Navbar className='nav-bar' fixed="top"   expand="lg">
                <Navbar.Brand href="/">BeagleBit</Navbar.Brand>
                <div>

                    
                     <Button className="btn  ml-auto mr-1" variant="success" onClick={this.login}>Sign in</Button>
                </div>
            </Navbar>

             </React.Fragment>
        );
    }
}

   
  