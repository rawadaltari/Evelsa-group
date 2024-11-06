import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "/src/assets/images/Frame 560.png";
export default function Hero() {
  const Group = [
    {
      id: 1,
      title: "Woman’s Fashion",
    },
    {
      id: 2,
      title: "Men’s Fashion",
    },
    {
      id: 3,
      title: "Electronics ",
    },
    {
      id: 4,
      title: "Home & Lifestyle",
    },
    {
      id: 5,
      title: "Medicine",
    },
    {
      id: 6,
      title: "Sports & Outdoor",
    },
    {
      id: 7,
      title: "Baby’s & Toys",
    },
    {
      id: 8,
      title: "Groceries & Pets",
    },
  ];

  return (
    <Container>
      <Row className="hero-block block">
        <Col sm={4}>
          <ListGroup>
            {Group.map((lst) => {
              return (
                <div
                  key={lst.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "250px",
                  }}
                >
                  <ListGroup.Item style={{ border: "none" }}>
                    {lst.title}
                  </ListGroup.Item>
                  <div style={{ flexGrow: 1 }}></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </div>
              );
            })}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <img src={img1} alt="Iphone sales" />
        </Col>
      </Row>
    </Container>
  );
}
