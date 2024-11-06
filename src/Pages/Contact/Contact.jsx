import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../component/Footer/Footer";
import NavBar from "../../component/Nav/NavBar";
import Navtop from "../../component/NavTop/Navtop";
import "./Contact.css";

import Formval from "./Formval";
export default function Contact() {
  return (
    <section>
      <Navtop />
      <NavBar />
      <Container>
        <Row className="contact">
          <Col md={4} sm={11} >
            <div className="contact-section">
              <div className="contact-option">
                <i className="contact-icon fas fa-phone-alt"></i>
                <h3>Call To Us</h3>
                </div>
                <div className="contact-info">
                  
                  <p>We are available 24/7, 7 days a week. </p>
                    <p>
                    Phone: +8801611112222
                    Phone: +8801611112222
                    </p>  
                
              
                </div>
              
              <hr></hr>
              
              <div className="contact-option">
                <i className=" contact-icon fas fa-envelope"></i>
                <h3>Write To Us</h3></div>
                <div className="contact-info">
                
                <p>
                  Fill out our form and we will contact you within 24 hours. </p>
                  <p>
                  Emails: customer@exclusive.com
                  Emails: customer@exclusive.com
                  </p>
                  
               
              
                </div>
              
              
            </div>
             
             
          </Col>
          <Col md={8}  sm={12}>
       <Formval/>
          </Col>
        </Row>
      </Container>

      <Footer />
    </section>
  );
}
