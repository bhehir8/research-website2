import React from "react";
import "../custom.scss";
import "mdbreact/dist/css/mdb.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class Suggestions extends React.Component {
  render() {
    return (
      <div class="Suggestions-Page">
        {/* <strong className="title">The Ethical Dilemma of Automation
Replacing the Workforce</strong> */}
        <Jumbotron fluid>
          <Container>
            <h1>Suggestions</h1>
          </Container>
        </Jumbotron>
        <div className="main-text">
          <p className="left">
            One of the most effective ways to diminish the effects of job
            polarization and it’s racial consequences is to restructure the
            education system. I’ve outlined 3 tips to do so below.
          </p>
          <p className="left">
            <ol type="1">
              <li>
                <strong>Fix School Funding Disparities</strong>
              </li>
              <p className="left">
                All public schools, regardless of nearby property value, should
                be given equal funding. This would require restructuring the way
                schools receive funding from the government. As opposed to
                having property taxes only serving the school districts within
                its borders, the property taxes ought to be pooled across the
                state. From this large pool of money, each school should be
                funded accordingly based off the number of students they serve.
                This would even the educational playing field for children
                across all communities.
              </p>
              <li>
                <strong>Hold Higher Education Accountable</strong>
              </li>
              <p>
                Colleges must play an active role in recruiting, and maintaining
                students from minority populations. This can be done by creating
                scholarships so that these students can attend the top tier
                college they otherwise could not have afforded. Furthermore,
                mentorship programs can be created to help keep minority
                students on pace to graduate.
              </p>
              <li>
                <strong>Update the Curriculum</strong>
              </li>
              <p>
                Lastly, the educational system should update its curriculum to
                better prepare students for the new future of work. This would
                require giving more focus to coding, analytics, as well as
                interpersonal skills. However, it is important to note that
                classes in art, history, and literature and so on should not be
                undermined. These fields are inherently immune to automation and
                add cultural value to society. But, if we raise the standard of
                the typical education level, the higher skilled job market can
                become saturated, thus lowering the wages and depolarizing the
                market.
              </p>
            </ol>
          </p>
        </div>
      </div>
    );
  }
}
