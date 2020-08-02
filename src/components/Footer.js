import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import brendan from '../Brendan_web.png';
import React from 'react';

export default class Footer extends React.Component{
render(){
    return(
<MDBFooter color="red" className="font-small pt-4 mt-4 ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>

          <MDBCol >
            <h5 className="title">Brendan Hehir</h5>
            <p>
              Advanced Writting in the Technical Professions
            </p>

          </MDBCol>
          <MDBCol >
            <h5 className="title">Contact</h5>
            <ul>
              {/* <li className="list-unstyled"> */}
              <p>
              hehir.b@northeastern.edu
                </p>
              {/* </li> */}
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
    )
}
}
