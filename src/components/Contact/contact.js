import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";

function contact() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Feel Free to <strong className="purple">Contact </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I'vae worked on recently.
        </p>
        <Form className="contact-form">
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label style={{ color: "black" }}>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label style={{ color: "black" }}>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formSubject">
            <Form.Label style={{ color: "black" }}>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label style={{ color: "black" }}>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-button">
            Submit
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default contact;
