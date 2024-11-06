import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Wordtitle from "../../Compon/Wordtitle/Wordtitle";
import Image from "react-bootstrap/Image";
import "./Category.css"
export default function Category() {
  const Category = [
    {
      id: 1,
      Image: "/src/assets/images/Category-Phone (1).png",
    },
    {
      id: 2,
      Image: "/src/assets/images/Category-Phone (2).png",
    },
    {
      id: 3,
      Image: "/src/assets/images/Category-Phone (4).png",
    },
    {
      id: 4,
      Image: "/src/assets/images/Category-Phone (3).png",
    },
    {
      id: 5,
      Image: "/src/assets/images/Category-Phone (5).png",
    },
    {
      id: 6,
      Image: "/src/assets/images/Category-Phone.png",
    }
  ];
  return (
    <section  >
      <Container id="works" className="block works-block" >
        
        <Wordtitle title="Category" />
        <Row >
          <Col className="Category">
          <h2>Brows to category</h2>
        
          
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
       </Row>
        
       
        <Row >{Category.map((cat) => {
            return(
                <Col key={cat.id} sm={6} md={2}>
                    <div className="portfolio-wrapper">
                        <Image src={cat.Image}/>
                    </div>
                </Col>
            );
        })}</Row>
      </Container>
    </section>
  );
}
