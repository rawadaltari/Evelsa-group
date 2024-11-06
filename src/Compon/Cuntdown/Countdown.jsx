import  { useState, useEffect } from 'react';
import "./cuntdown.css";
import PropTypes from "prop-types";
import { Container,Row ,Col} from 'react-bootstrap';
const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  function calculateTimeRemaining(targetDate) {
    const now = new Date();
    const difference = new Date(targetDate) - now;
    const time = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return time;
  }

  return (
    <Container>
     <Row>
      <Col className='contdown' >
      <div >
        <h4 >&nbsp;&nbsp;days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; minutes&nbsp;&nbsp;&nbsp;&nbsp; seconds</h4>
        {timeRemaining.days}<span>&nbsp;:&nbsp;</span> {timeRemaining.hours}<span>&nbsp;:&nbsp;</span> {timeRemaining.minutes}<span>&nbsp;:&nbsp;</span> {timeRemaining.seconds}s
      </div>
      </Col>
    
     </Row>
      
    </Container>
  );
 
};
CountdownTimer.propTypes = {
    targetDate: PropTypes.string.isRequired,
  };
  
export default CountdownTimer;