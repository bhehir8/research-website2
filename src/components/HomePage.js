import React from "react";
import brendan from "../Brendan_web.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../custom.scss";
import "mdbreact/dist/css/mdb.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Card from "react-bootstrap/Card";
import { Parallax } from "react-scroll-parallax";
import robot from "../robot.jpg";
import Image from "react-bootstrap/Image";

export default class HomePage extends React.Component {
  render() {
    return (
      <div class="Home-Page">
        {/* <strong className="title">The Ethical Dilemma of Automation
Replacing the Workforce</strong> */}
        <Jumbotron fluid>
          <Container>
            <h1> Racial Implications Due to Automation </h1>
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
          <div className="main-text">
            <div className="left">
              <p>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Between self-driving cars, increasingly
                automated manufacturing lines, and the growing presence of
                artificial intelligence, it seems like jobs are continuously
                being handed over to automated systems. Fortunately, most
                experts agree that this will not lead to mass unemployment.
                However, we’ll see a more polarized workforce. The idea is that
                robots and increasingly sophisticated software are poised to
                replace the jobs held by middle skilled individuals. Middle
                skilled jobs include manufacturers, office clerks, and
                researchers. The automation of these middle skilled
                jobs will make them more efficient, and as a result, there will
                be an increased demand for high skilled level positions such as
                managers and technical professionals. High skilled jobs usually
                require college degrees in order to be qualified. Since these
                high skilled and high paying jobs are increasing for those with
                the credentials, there is increased demand for lower skilled
                jobs such as waiters, retail workers, and entertainers. This is
                because the high skilled employees will be afforded with more
                expandable income and time. As a result, two very different
                classifications are created. The high paying, high skilled jobs
                at the top, and the low paying, and low skilled jobs at the
                bottom.
              </p>
              <br />
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Job polarization brings about serious
                ethical concerns. The most obvious being the huge inequality in
                wages and opportunity. Those who hold high paying jobs can
                afford to give their children a higher quality of education, and
                as a result, those kids go on to fill high paying jobs. On the
                other end, those who hold low paying jobs cannot afford the same
                level of education for their children, which puts them at a
                major disadvantage to attain the high paying jobs. This is the
                cycle of poverty, which is nothing new. However, by eliminating
                the middle skilled jobs, it makes it much more difficult to
                escape poverty. This is even more concerning when considering that the already
                  marginalized minority populations are poised to suffer the most
                  as a result.
              </p>
              <br />
            </div>
            <br />
            <Badge pill variant="danger">
              Navigate through the tabs to learn more.
            </Badge>{" "}
          </div>

          <Parallax className="custom-class" y={[-3, 3.2]} tagOuter="figure">
            <Image className="robot" src={robot} />
          </Parallax>
        </main>
      </div>
    );
  }
}
