import React from 'react'
import {Container, Form, Col, Row, Button} from 'react-bootstrap'
import "./dispatch.css"

 const Dispatch = () => {


    return(
       
        <div>
            <Container className="top">
                <div className="float-left">
                    <h5>
                        <strong><a href="">Dispatch</a></strong>
                    </h5>
                </div>
                <div  id="float-left">
                    <h5>
                        <strong><a href="">Dispatch Preferences</a></strong>
                    </h5>
                </div>
            </Container>

            <section className="dispatch-row1">
                <Row>
                    <Col md={4} className="">
                    <p>Dispatch Number: <a href="/"><small>Switch to Manual Numbering</small></a></p>
                    
                    </Col>
                    <Col md={8}>
                        <Form>
                        <Row>
                            <Col>
                            <Form.Label>PRO Number</Form.Label>
                            <Form.Control placeholder="Enter PRO Number" />
                            </Col>
                            <Col>
                            <Form.Label>Dispatch Date</Form.Label>
                            <Form.Control placeholder="State" type="date" />
                            </Col>
                            <Col>
                            <Form.Label>Dispatch Time</Form.Label>
                            <Form.Control placeholder="Zip" type="time" />
                            </Col>
                        </Row>
                        </Form>
                    </Col>    
                </Row>
                <hr/>
            </section>
            
        </div>
       
    )
}
 export default Dispatch  

