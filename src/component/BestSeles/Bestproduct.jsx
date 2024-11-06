import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Bestproduct() {
    const bestproduct =[
        {
            id:1,
            Image:"/src/assets/images/Cart.png",
        },
        {
            id:2,
            Image:"/src/assets/images/Cart (1).png",
        },
        {
            id:3,
            Image:"/src/assets/images/Cart (2).png",
        },
        {
            id:4,
            Image:"/src/assets/images/Cart (3).png",
        },
    ]
  return (
    <section id="works" className="block works-block" style={{border:"none"}}>
      <Container>
        <Row >
          {bestproduct.map((best) => {
            return (
              <Col key={best.id} sm={3}>
                <div className="portfolio-wrapper">
                 
                    <Image src={best.Image} />
                
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  )
}
