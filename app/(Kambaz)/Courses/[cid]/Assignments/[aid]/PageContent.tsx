import { Form, FormControl, FormLabel, Row } from "react-bootstrap";

export default function() {
    return(
        <div>
            <Form>
                <Row className="mb-2">
                    <FormLabel > Assignment Name </FormLabel> 
                    
                </Row>
                <Row>
                    <FormControl type = "text" > </FormControl>
                </Row>
                
            </Form>
        </div>
    )
}