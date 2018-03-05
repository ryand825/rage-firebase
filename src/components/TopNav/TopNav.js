import React, { Component } from 'react';
import './TopNav.css';
import Login from './Login';

import rageLogo from "../../assets/RAGE CORPS LOGO-06.png";
import rageCorps from "../../assets/RAGE CORPS LOGO-03.png";

import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Modal, Button } from 'react-bootstrap';

class TopNav extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }


    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


    render() {
        return (
            <div>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img alt="rage logo" className="logo" src={rageCorps} />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Home</NavItem>
                            <NavItem eventKey={2} href="#">Blog</NavItem>
                            <NavDropdown eventKey={3} title="Store" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>All</MenuItem>
                                <MenuItem eventKey={3.2}>Mens</MenuItem>
                                <MenuItem eventKey={3.3}>Womens</MenuItem>
                                <MenuItem eventKey={3.3}>Accessories</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={2} href="#">Contact</NavItem>
                            <MenuItem divider />
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#"><i className="fas fa-shopping-cart"></i> Cart</NavItem>
                            <NavItem eventKey={2} onClick={this.handleShow} href="#"><i className="fas fa-user"></i> Login</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Login show={this.state.show} handleClose={this.handleClose} />
            </div>
        );
    }
}

export default TopNav;