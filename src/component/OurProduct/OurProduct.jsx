import { Col, Container, Row } from "react-bootstrap";

import Image from "react-bootstrap/Image";
import Btn from "../../Compon/Btn/btn";

export default function OurProduct() {
  const OurPro = [
    {
      id: 1,
      Image: "/src/assets/images/1 (2).png",
      link: "https://www.google.com",
    },
    {
      id: 2,
      Image: "/src/assets/images/2.png",
      link: "https://www.google.com",
    },
    {
      id: 3,
      Image: "/src/assets/images/3 (2).png",
      link: "https://www.google.com",
    },
    {
      id: 4,
      Image: "/src/assets/images/4 (2).png",
      link: "https://www.google.com",
    },
    {
      id: 5,
      Image: "/src/assets/images/5 (2).png",
      link: "https://www.google.com",
    },
    {
      id: 6,
      Image: "/src/assets/images/6.png",
      link: "https://www.google.com",
    },
    {
      id: 7,
      Image: "/src/assets/images/7.png",
      link: "https://www.google.com",
    },
    {
      id: 8,
      Image: "/src/assets/images/Cart With Flat Discount.png",
      link: "https://www.google.com",
    },
  ];
  return (
    <section id="works" className="block works-block" style={{border:"none"}}>
      <Container>
        <Row >
          {OurPro.map((our) => {
            return (
              <Col key={our.id} sm={3}>
                <div className="portfolio-wrapper">
                 
                    <Image src={our.Image}  style={{paddingTop:"30px"}}/>
                
                </div>
              </Col>
            );
          })}
        </Row>
        
      </Container>
      <Btn btntext="view all product" />
    </section>
  );
}
