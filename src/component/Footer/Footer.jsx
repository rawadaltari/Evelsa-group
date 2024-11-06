import { Col, Container, Image, Row } from "react-bootstrap";

import img1 from "../../assets/images/Frame 742.png";
import "./Footer.css";

export default function Footer() {
  return (
    <section
      className="fot"
      style={{
        backgroundColor: "black",
        marginTop: "50px",
        paddingTop: "30px",
      }}
    >
      <Container>
        <Row style={{ color: "white", fontSize: "16px" ,paddingBottom:"20px"}}>
          <Col sm={2}>
            <h2>Exclusive</h2>
            <h4 style={{ color: "gray" }}>Subscribe</h4>
            <p style={{ color: "gray" }}>Get 10% off your first order</p>
          </Col>
          <Col sn={3}>
            <h2>Support</h2>
            <p style={{ color: "gray" }}>
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh. exclusive@gmail.com
              +88015-88888-9999
            </p>
          </Col>
          <Col sm={3}>
            <h2>Account</h2>
            <ul style={{ color: "gray" }}>
              <li>My Account</li>
              <li>Login / Register</li>
              <li> Cart</li>
              <li>Wishlist Shop</li>
            </ul>
          </Col>
          <Col sm={3}>
            <Image src={img1} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
