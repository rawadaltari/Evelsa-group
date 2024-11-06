import Navtop from "../../component/NavTop/Navtop";
import Footer from "../../component/Footer/Footer";
import NavBar from "../../component/Nav/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/dl.beatsnoop 1.png";

import Form from "react-bootstrap/Form";

import Btn from "../../Compon/Btn/btn";
export default function Login() {
  return (
    <section>
      <Navtop />
      <NavBar />
      <Container>
        <Row className="cart" style={{ marginTop: "100px" }}>
          <Col sm={6}>
            <img src={img1} />
          </Col>
          <Col sm={5}>
            <Form className="form-group">
              <h1>Log in to Exclusive</h1>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="rember this acount" />
              </Form.Group>

              <Btn btntext="Login" type="submit"/>

              <p>
                 <a href="https://www.google.com/">forget password..?</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}
