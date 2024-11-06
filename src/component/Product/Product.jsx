import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
export default function Product() {
  const Product = [
    {
      id: 1,
      Image: "/src/assets/images/Cart With Flat Discount (2).png",
      link: "https://www.google.com",
    },
    {
      id: 2,
      Image: "/src/assets/images/Cart With Flat Discount (1).png",
      link: "https://www.google.com",
    },
    {
      id: 3,
      Image: "/src/assets/images/Cart With Flat Discount (3).png",
      link: "https://www.google.com",
    },
    {
      id: 4,
      Image: "/src/assets/images/Cart With Flat Discount.png",
      link: "https://www.google.com",
    },
  ];
  return (
    <section id="works" className="block works-block" style={{border:"none"}}>
      <Container>
        <Row >
          {Product.map((pro) => {
            return (
              <Col key={pro.id} sm={3}>
                <div className="portfolio-wrapper">
                 
                    <Image src={pro.Image} />
                  
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
