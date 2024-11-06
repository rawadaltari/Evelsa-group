import { Container, Row, Col } from "react-bootstrap";
import "./NewArrival.css";
import Image from "react-bootstrap/Image";
import img1 from "../../assets/images/Frame 684.png";
import img2 from "../../assets/images/Frame 685.png";
import img3 from "../../assets/images/Frame 686.png";
import img4 from "../../assets/images/Frame 687.png";
import Wordtitle from "../../Compon/Wordtitle/Wordtitle";
export default function NewArrival() {
  return (
    
    <section id="NewArrival" className="NewArrival">
        
      <Container className="Arrival-item">
      <Wordtitle title="NewArrival"/>
        <Row >
          <Col md={6} sm={6}>
            <Image src={img1} />
          </Col>
          <Col md={5} sm={6} className="portfolio-wrapper">
            <Image src={img2} />
            <Row className="item">
              <Col className="portfolio-wrapper">
                <Image src={img3} />
              </Col>
              <Col className="portfolio-wrapper">
                <Image src={img4} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
