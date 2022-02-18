import React from 'react'
import {Container, Form, Col, Row, Button} from 'react-bootstrap'
import "./dispatch.css"

 const Dispatch = () => {


    return(
       
        <div className="dispatch-row1">
            <Container className="top">
                <div className="float-left">
                    <h5>
                        <strong><a href="/dispatch">Dispatch</a></strong>
                    </h5>
                </div>
                <div  id="float-left">
                    <h5>
                        <strong><a href="/dispatch">Dispatch Preferences</a></strong>
                    </h5>
                </div>
            </Container>
            <Form>
            <section >
            
                <Row>
                    <Col md={4} className="">
                    <p>Dispatch Number: <a href="/"><small>Switch to Manual Numbering</small></a></p>
                    
                    </Col>
                    <Col md={8}>
                     
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
                      
                    </Col>    
                </Row>
                    
                <hr/>
            </section>
            <section>
                <h5><strong>Customer/Broker</strong></h5>
                <Row>
                    <Col md={4} className="col-101" >
                        <Form.Check
                            inline
                            label="customer"
                            name="group1"
                            type="radio"
                        
                        />
                        <Form.Check
                            inline
                            label="Broker"
                            name="group1"
                            type="radio"
                        
                        />
                        <br/>
                        <Form.Group as={Row} className="mb-3 top-form" controlId="formHorizontalEmail">
                            <Form.Label>
                            Customer:
                            </Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="" />
                            <br/>
                            <Button>Add</Button>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label >
                            Account Number:
                            </Form.Label>
                            <Col>
                            <Form.Control type="text"  />
                            </Col>
                        </Form.Group>

                        <Form.Check
                            inline
                            label="CSA Eligible Dispatch"
                            name="group1"
                            type="checkbox"
                        
                        />
                    </Col>
                    <Col md={2}>

                    </Col>
                    <Col md={5}>
                    <Form.Group as={Row} className="mb-3 top-form" controlId="formHorizontalEmail">
                            <Form.Label>
                            Refference:
                            </Form.Label>
                            <Col>
                            <Form.Control as="textarea"
                                style={{ height: '150px' }} />
                            <br/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 top-form" controlId="formHorizontalEmail">
                            <Form.Label>
                            C-TPAT:
                            </Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="" />
                            <br/>
                            <Button>Add</Button>
                            </Col>
                        </Form.Group>


                    </Col>
                </Row>        
                <hr/>
                
            </section>
            </Form>
        </div>
       
    )
}
 export default Dispatch  

