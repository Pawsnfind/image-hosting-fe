import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { DaFux } from './dafux';

export default class NavBar extends React.Component {
 

    logout = () => {
        window.localStorage.removeItem('auth');
        DaFux.changeRoute('/');
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

                    {localStorage.getItem('auth') === null ? (
                     <Button className="btn  ml-auto mr-1" variant="success" onClick={this.login}>Sign in</Button>
                    ) : (
                        <Button className="btn  ml-auto mr-1" variant="success" onClick={this.logout}>Sign Out</Button>
                    )}

                     
                </div>
            </Navbar>

             </React.Fragment>
        );
    }
}

   
  