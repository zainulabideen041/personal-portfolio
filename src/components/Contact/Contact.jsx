import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Particle from "../Particle";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "32a6d901-7d57-47b8-9fee-8f31513b3c6d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Container fluid className="project-sectionn" style={{marginTop:"70px", marginBottom:"50px"}}>
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Feel Free to <strong className="purple">Contact </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I'vae worked on recently.
        </p>
        <Form className="contact-form" onSubmit={onSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName" style={{margin:"10px"}}>
                <Form.Label style={{ color: "black" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  style={{
                    backgroundColor: "#fff",
                    color: "#222",
                    border: "1px solid green",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail" style={{margin:"10px"}}>
                <Form.Label style={{ color: "black", backgroundColor: "#fff" }}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    backgroundColor: "#fff",
                    color: "#222",
                    border: "1px solid green",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formSubject" style={{margin:"10px"}}>
            <Form.Label style={{ color: "black", backgroundColor: "#fff" }}>
              Subject
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter subject"
              style={{
                backgroundColor: "#fff",
                color: "#222",
                border: "1px solid green",
              }}
            />
          </Form.Group>
          <Form.Group controlId="formMessage" style={{margin:"10px"}}>
            <Form.Label style={{ color: "black", backgroundColor: "#fff" }}>
              Message
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message"
              style={{
                backgroundColor: "#fff",
                color: "#222",
                border: "1px solid green",
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-button">
            Submit
          </Button>
        </Form>
        <span style={{color:"#fff", marginTop:"20px"}}>{result}</span>
      </Container>
    </Container>
  );
}

export default Contact;
