import { Col, Container, Image, Row } from "react-bootstrap";
import "./Work.css"

export default function Work() {
    const work = [
        {
            id:1,
            Image:"/src/assets/images/Frame 701.png"
        },
        {
            id:2,
            Image:"/src/assets/images/Frame 702.png"
        },
        {
            id:3,
            Image:"/src/assets/images/Frame 704.png"
        },
    ]
  return (
   <Container>
    <Row className="work" >
        {work.map((flow)=>{
            return(
                <Col key={flow.id} sm={4}>
                    <Image src={flow.Image} alt="work-flow"/>
                </Col>
            );
        })}
       
    </Row>
   </Container>
  )
}
