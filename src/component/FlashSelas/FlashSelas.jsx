import { Col, Container, Row } from "react-bootstrap";
import Wordtitle from "../../Compon/Wordtitle/Wordtitle";
import CountdownTimer from "../../Compon/Cuntdown/Countdown";
import "./FlashSelas.css";
import Product from "../Product/Product";
import Btn from "../../Compon/Btn/btn";

export default function FlashSelas() {
  const targetDate = "2024-12-31";
  return (
    <section >
      <Container >
        <Wordtitle title="Todays" />
        <Row
         style={{flexWrap:"wrap",flex:1,}}
         className="product"
        >
          <Col sm={4}>
            <h2>Flashing Selas</h2>
          </Col>
          <Col > 
            
              <CountdownTimer targetDate={targetDate} />
            
          </Col>

          <Col sm={2}>
            <div className="hidden-on-small">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </div>
           
         
              
           
          </Col>

          <Product />
        </Row>
       <Btn btntext="View more"/>
       <hr></hr>
      </Container>
      
    </section>
  );
}
