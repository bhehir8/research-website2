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
{/*<Card>
<Card.Header><h3>Job Polarization</h3></Card.Header>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card>

<Card>
<Card.Header><h3>Ethical Dilemma</h3></Card.Header>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card>*/}

<p>It seems like every day we are moving closer to a society run by robots. With self-driving cars, increasingly automated manufacturing lines, and even online customer service Chabot that can answer seemingly any question, jobs that used to be performed by humans are becoming autonomous. Fortunately, most experts agree that this will not lead to mass unemployment, however, we’ll see a more polarized workforce. The idea is that robots and increasingly sophisticated software are poised to replace the jobs held by middle skilled individuals. These jobs include, manufacturers, office clerks, and researchers & data entry. The automation of these middle skilled jobs will make them more efficient, and as a result, there will be an increased demand for high skilled level positions such as managers, technical professionals. These jobs usually require college degrees in order to be qualified. Since these high skilled and high paying jobs are increasing for those with the credentials, there is increased demand for lower skilled jobs such as waiters, retail workers, and entertainment will increase. These is because the high skilled employees will be afforded with more expandable income and time. As a result, two very different classifications are created. The high paying, high skilled jobs at the top, and the low paying, and low skilled jobs at the bottom.
This job polarization brings about serious ethical concerns. The most obvious being the huge inequality in wages and opportunity. Those who hold high paying jobs can afford to give their children a higher quality of education, and as a result, those kids go on to fill high paying jobs. On the other end, those who hold low paying jobs cannot afford the same level of education for their children, which puts them at a major disadvantage to attain the high paying jobs. This is the cycle of poverty, which is nothing new. However, by eliminating the middle skilled jobs, it makes it much more difficult to escape poverty.
This is even more concerning when considering that the already marginalized minority populations are poised to suffer the most as a result. Navigate through the tabs to learn more.
</p>

</main>
    </div>
      )}}
