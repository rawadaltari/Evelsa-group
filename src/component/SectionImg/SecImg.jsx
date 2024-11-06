import { Col, Container, Row } from "react-bootstrap";
import img1 from "/src/assets/images/Frame 600.png"
import Image from "react-bootstrap/Image";
export default function SecImg() {
  return (
    <section className="hero-block" id="home" style={{border:"none"}}>
        <Container>
            <Row>
                <Col sm={12} style={{marginTop:"50px" ,padding:"10px"}}>
                <Image src={img1}/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
