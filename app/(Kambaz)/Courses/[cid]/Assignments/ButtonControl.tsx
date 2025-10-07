import { Row, Col, Form, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";

export default function ButtonControl() {
    return(
        <div className="text-nowrap" >
             <Row className = "mb-3">
        <Col className="float-start">
          <Form.Control type = "text"  placeholder = "Search" className="w-75"/>
        </Col>
        <Col className="d-flex justify-content-end gap-3">
        <Button variant="secondary" size="lg" className="me-1 " id="wd-add-module-btn">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Group
     </Button>
     <Button variant="danger" size="lg" className="me-1 " id="wd-add-module-btn">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignments
     </Button>
        </Col>
        </Row>

        </div>
    )
}