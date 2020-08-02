import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import logo from '../Northeastern_University_Logo_full.png';

export default class HomePage extends React.Component {
    render() {
      return (
<Navbar bg="light" variant="light" expand="lg">
    <Navbar.Brand>
      <img
        src={logo}
        width="120"
        height="40"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/#/minorities">Systemic Racism & Education
</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
         <Nav.Link href="/#/suggestions">Suggestions</Nav.Link>

        </Nav>

    </Navbar.Collapse>
    </Navbar>
      )
    }
}
