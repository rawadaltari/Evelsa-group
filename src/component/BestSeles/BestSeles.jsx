import { Col, Container, Row } from "react-bootstrap";
import Wordtitle from "../../Compon/Wordtitle/Wordtitle";
import Btn from "../../Compon/Btn/btn";
import Bestproduct from "./Bestproduct";
export default function BestSeles() {
  return (
    <section >
      <Container >
        <Wordtitle title="This months" />
        <Row
         style={{flexWrap:"wrap",flex:1,}}
         className="product"
        >
          <Col sm={10}>
            <h2>Best Selling Products</h2>
          </Col>
          <Col sm={2}> 
          <Btn btntext="View All"/>
          </Col>
        </Row>
    <Bestproduct/>
      </Container>
    </section>
  )
}
