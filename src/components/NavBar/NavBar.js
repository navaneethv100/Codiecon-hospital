import React from 'reactn';
import {Link} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './NavBar.css';

class NavBar extends React.Component {

    render() {
        return (
            <Navbar variant='dark' expand="md" sticky="top" className="text-center navbar-root"
                    style={{'backgroundColor':"#303841"}} >
                <Navbar.Brand className="Silicon-Brand ml-3 text-danger">Team Quadrilateral</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-5">
                        <Link to={'/'} className="nav-link">Home</Link>
                        <Link to={'/'} className="nav-link text-success"> Connected </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default NavBar;