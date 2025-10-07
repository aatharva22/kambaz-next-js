import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function ButtonControl() {
    return(
        <div className="text-nowrap" >
             <Row className = "mb-3">
        <Col className="float-start">
        
        <div className="position-relative w-75">
  <     CiSearch
        className="position-absolute top-50 start-0 translate-middle-y ms-2 text-secondary"
        size={20}
        />
        <Form.Control
        type="text"
        placeholder="Search"
       className="ps-5"
        />
</div>

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