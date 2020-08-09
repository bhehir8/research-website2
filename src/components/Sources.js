import React from "react";
import "../custom.scss";
import "mdbreact/dist/css/mdb.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class Suggestions extends React.Component {
  render() {
    return (
      <div class="Sources-Page">
        {/* <strong className="title">The Ethical Dilemma of Automation
Replacing the Workforce</strong> */}
        <Jumbotron fluid>
          <Container>
            <h1>Sources</h1>
          </Container>
        </Jumbotron>
        <div className="main-text">
          <p className="left">
            M. J. Böhm, “The Causes and Consequences of Job Polarization, and
            their Future Perspectives,” OpenMind, 18-Feb-2020. [Online].
            Available:
            https://www.bbvaopenmind.com/en/articles/causes-and-consequences-of-job-polarization-andtheir-future-perspectives/.
            [Accessed: 12-Jul-2020].
            <br />
            <br />
            B. Vermeulen, J. Kesselhut, A. Pyka, and P. Saviotti, “The Impact of
            Automation on Employment: Just the Usual Structural Change?,”
            Sustainability, vol. 10, no. 5, p. 1661, 2018.
            <br />
            <br />
            M. Goos, A. Manning, and A. Salomons, “Job Polarization in Europe,”
            American Economic Review, 2009. [Online]. Available:
            https://www.aeaweb.org/articles?id=10.1257/aer.99.2.58. [Accessed:
            12-Jul-2020].
            <br />
            <br />
            T. Gross, “A 'Forgotten History' Of How The U.S. Government
            Segregated America,” NPR, 03May-2017. [Online]. Available:
            https://www.npr.org/2017/05/03/526655831/a-forgotten-historyof-how-the-u-s-government-segregated-america.
            [Accessed: 26-Jul-2020].
            <br />
            <br />
            Carnevale, A. and Strohl, J., 2020. Separate And Unequal. [online]
            Cew.georgetown.edu. Available at:
            http://cew.georgetown.edu/wp-content/uploads/SeparateUnequal.FR_.pdf>
            [Accessed 16 July 2020].
            <br />
            <br />
            Edbuild.org. 2020. 23 Billion. [online] Available at:
            https://edbuild.org/content/23-billion/fullreport.pdf> [Accessed 16
            July 2020].
            <br />
            <br />
            Edbuild.org. 2020. Clean Slate. [online] Available at:
            https://edbuild.org/content/cleanslate/full-report.pdf> [Accessed 16
            July 2020].
          </p>
        </div>
      </div>
    );
  }
}
