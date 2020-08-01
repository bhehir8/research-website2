import React from 'react';
import brendan from '../Brendan_web.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../custom.scss';
import 'mdbreact/dist/css/mdb.css' 
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Card from 'react-bootstrap/Card';

export default class HomePage extends React.Component {
    render() {
      return (
          <div class="Home-Page">
    
    {/* <strong className="title">The Ethical Dilemma of Automation
Replacing the Workforce</strong> */}
<Jumbotron fluid>
  <Container>
    <h1>The Ethical Dilemma of Automation
        Replacing the Workforce</h1>
  </Container>
</Jumbotron>
<main>
{/* <h2 align="left">Job Polarization</h2> */}
<Card>
<Card.Header><h3>Job Polarization</h3></Card.Header>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card>

<Card>
<Card.Header><h3>Ethical Dilemma</h3></Card.Header>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card>

</main>
    </div>
      )}}