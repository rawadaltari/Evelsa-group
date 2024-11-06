import Navtop from "../../component/NavTop/Navtop";
import Footer from "../../component/Footer/Footer";
import NavBar from "../../component/Nav/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/Side Image.png";
import Image from "react-bootstrap/Image";
import "./About.css";
import Work from "../../component/WorkFlow/Work";
export default function About() {
  const imgsection = [
    {
      id: 1,
      Image: "/src/assets/images/Frame 870.png",
    },
    {
      id: 2,
      Image: "/src/assets/images/Frame 871.png",
    },
    {
      id: 3,
      Image: "/src/assets/images/Frame 872.png",
    },
    {
      id: 4,
      Image: "/src/assets/images/Frame 873.png",
    },
  ];
  const team = [
    {
      id: 1,
      Image: "/src/assets/images/Frame 887.png",
    },
    {
      id: 2,
      Image: "/src/assets/images/Frame 888.png",
    },
    {
      id: 3,
      Image: "/src/assets/images/Frame 889.png",
    },
  ];
  return (
    <section>
      <Navtop />
      <NavBar />

      <Container>
        <Row className="About">
          <Col sm={5}>
            <div className="content">
              <h1>Our Story</h1>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </Col>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
        </Row>
        <Row className="sidebar">
          {imgsection.map((side) => {
            return (
              <Col key={side.id} sm={3}>
                <Image src={side.Image} />
              </Col>
            );
          })}
        </Row>
        <Row className="team">
          {team.map((tem) => {
            return <Col key={tem.id} sm={4}>
                    <Image src={tem.Image}/>
            </Col>;
          })}
        </Row>
      </Container>
      <Work/>
      <Footer />
    </section>
  );
}
