import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import logo from '../Northeastern_logo.svg.png';
import brendan from '../Brendan_web.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../custom.scss';
import 'mdbreact/dist/css/mdb.css' 
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class HomePage extends React.Component {
    render() {
      return (
          <div class="Home-Page">
          
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand>
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Minority Disadvantages</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
         <Nav.Link href="#link">Suggestions</Nav.Link>

        </Nav>
        
    </Navbar.Collapse>
    </Navbar>
    {/* <strong className="title">The Ethical Dilemma of Automation
Replacing the Workforce</strong> */}
<Jumbotron fluid>
  <Container>
    <h1>The Ethical Dilemma of Automation
        Replacing the Workforce</h1>
  </Container>
</Jumbotron>
<MDBFooter color="red" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
      
        <MDBRow>
        <MDBCol md="2">
      <img
        src={brendan}
        width="100"
        height="150"
        className="d-inline-block align-top"
      />
            
          </MDBCol>
          <MDBCol >
            <h5 className="title">Brendan Hehir</h5>
            <p>
              Aerobic Machine
            </p>
            <p>
              Always Feeling Dangerous
            </p>
            
          </MDBCol>
          <MDBCol >
            <h5 className="title">Contact</h5>
            <ul>
              <li className="list-unstyled">
              <p>
              Any Place, Any Time           
                </p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
      )}}