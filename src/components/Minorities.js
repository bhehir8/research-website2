import React from "react";
import "../custom.scss";
import "mdbreact/dist/css/mdb.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Image from "react-bootstrap/Image";
import table from "../Table.PNG";
import school_split from "../School_split_graphic.PNG";

export default class Minorities extends React.Component {
  render() {
    return (
      <div class="Minority-Page">
        {/* <strong className="title">The Ethical Dilemma of Automation
Replacing the Workforce</strong> */}
        <Jumbotron fluid>
          <Container>
            <h1>Systemic Racism & Education</h1>
          </Container>
        </Jumbotron>
        <div className="main-text">
          <p className="left">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;The root cause of the unfair disadvantage
            held by Black and Hispanic populations goes back centuries; however,
            the modern day socio-economic disadvantage can be accredited to the
            redlining practices of the 1930s. Redlining essentially denied
            minority communities services and funding from local and federal
            governments. The effects of these practices are still felt today as
            poverty is far more concentrated in Black and Hispanic communities
            as opposed to white communities. These negative effects are
            profoundly demonstrated in the inequality of public schools. Because
            schools are largely funded by local property taxes, the schools in
            Black and Hispanic communities receive far less funding than those
            is white communities. It’s estimated that predominantly Black and
            Hispanic school districts receive $23 million less than the
            predominantly white school district despite serving equal amounts of
            students.{" "}
          </p>{" "}
          <br />
          <p className="left">
            &nbsp;&nbsp;&nbsp;&nbsp;The unequal funding of the schools at the
            elementary and high school levels are then reflected at the
            collegiate level. The table below describes this well:
          </p>
          <br />
        </div>
        <Image src={table} />
        <br /> <br />
        <div className="main-text">
          <p className="left">
            &nbsp;&nbsp;&nbsp;&nbsp;The table indicates that white and Asian
            students make up a disproportionately high percentage of the more
            selective school, with black and Hispanic students being
            underrepresented at these universities. Thus, the black and Hispanic
            populations are overrepresented in the less prestigious schools. The
            image below graphically illustrates the message above.
          </p>
        </div>
        <br />
        <Image src={school_split} />
      </div>
    );
  }
}
