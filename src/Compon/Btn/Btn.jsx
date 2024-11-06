import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
export default function Btn({btntext}) {
  return (
    <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <Button variant="secondary" className="btn btn-primary">
           {btntext}
          </Button>
        </div>
  )
 
}
Btn.propTypes = {
    btntext: PropTypes.string.isRequired,
  };