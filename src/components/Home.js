import React from 'react';
import {Card, Col, Row, Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home-cards">
            <Row>
                <Col md={6} className="column">
                    <Card >
                        <Card.Header>Acive Loads</Card.Header>
                        <Card.Body className="text-center">
                            <Card.Title>Create Your First Load</Card.Title>
                            <Card.Text>
                            Create a load and calculate the load charges for a customer by adding the shipper, consignee, and freight details.
                            </Card.Text>
                            <Link  to="/" variant="primary">Create Load</Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col sm={6} className="space-btn-col">
                    <Card >
                        <Card.Header>Assigned Dispatch</Card.Header>
                        <Card.Body className="text-center">
                            <Card.Title>Create Your First Dispatch!</Card.Title>
                            <Card.Text>
                            Create a Quick Dispatch to assign, enter trip sheets, and add expenses for the dispatch.
                            </Card.Text>
                            <Link  to="/dispatch" variant="primary">Quick Dispatch</Link>
                        </Card.Body>
                       
                        </Card>
                    </Col>

                </Row>
                <Row className="space-btn">
                <Col md={6} >
                    <Card >
                        <Card.Header>Open Invoices</Card.Header>
                        <Card.Body className="text-center">
                            <Card.Title>Generate Your First Invoice!</Card.Title>
                            <Card.Text>
                            Create invoices to your clients and record payments you receive from them.
                            </Card.Text>
                            <Link  to="/" variant="primary">Create Invoice</Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col sm={6} className="space-btn-col">
                    <Card  >
                        <Card.Header>Address Book</Card.Header>
                        <Card.Body className="text-center">
                            <Card.Title>Create Your First Contact!</Card.Title>
                            <Card.Text>
                            Create a contact by adding Customer, Driver, Carrier and Broker.
                            </Card.Text>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Create Contact
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Customer</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Driver</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Vendor</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Broker</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Career</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Staff</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Contact</Dropdown.Item>

                                </Dropdown.Menu>
                                </Dropdown>
                        </Card.Body>
                       
                        </Card>
                    </Col>

                </Row>
        </div>
    )
}

export default Home;
