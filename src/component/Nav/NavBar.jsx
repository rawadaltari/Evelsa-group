import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Nlink = [
  {
    id: 1,
    title: "Home",
    lin: `/Home/`,
  },
  {
    id: 2,
    title: "Contact",
    lin: `/Contact/`,
  },
  {
    id: 3,
    title: "About",
    lin: `/About/`,
  },
  {
    id: 4,
    title: "Sign Up",
    lin: `/SignUp/`,
  },
];
export default function NavBar() {
  return (
    <Navbar expand="lg" id="header" className="nav">
      <Container>
        <Navbar.Brand href="#">Exclusive</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "250px", }}
            navbarScroll
          >
            {Nlink.map((lin) => {
              return (
                <Nav.Link key={lin.id} href={lin.lin}>
                  {lin.title}
                </Nav.Link>
              );
            })}
          </Nav>
          <Form className="d-flex" style={{ width: "250px" }}>
            <Form.Control
              type="search"
              placeholder="what are you looking for...?"
              className="me-2"
              aria-label="Search"
            />
          </Form>

         <div style={{paddingTop:"3px"}}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
         </div>
        </Navbar.Collapse>
      </Container>
      <hr></hr>
    </Navbar>
  );
}
