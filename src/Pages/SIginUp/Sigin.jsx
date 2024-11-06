import Navtop from "../../component/NavTop/Navtop";
import Footer from "../../component/Footer/Footer";
import NavBar from "../../component/Nav/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/dl.beatsnoop 1.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Sigin.css";
import Btn from "../../Compon/Btn/btn";
export default function Sigin() {
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
              <h1>Create an account</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address or mobile phone:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Btn btntext="Sigin"  />
              <div style={{textAlign:"center"}}> 
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    textAlign: "center",
                    border: "1px solid black",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                  </svg>{" "}
                  <span style={{color:"black"}}>continue with google</span>
                </Button>
              </div>

              <p>
                Already have account? <a href="/login/">Log in</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}
