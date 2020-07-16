import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Navbar } from 'react-bootstrap';
import './styles.css';

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="8">
            <Navbar.Brand href="/">Honeymoon</Navbar.Brand>
            <p>
              O servidor foi criado em 02 de dezembro de 2019, tendo como intuito principal: a diversão dos membros em um local mais amigável e harmônico. Aqui, queremos que todos se sintam bem e acolhidos, conhecendo e conversando com novas pessoas. 
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} copyright <br /><a href="https://github.com/swyssauro"> sωıтcн </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;