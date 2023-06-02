import '../styles/contactMe.css';
import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import Profile from '../img/photos/profile.jpg';

const ContactMe = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&');
  }

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => {
        alert('Message sent, I will be contacting you soon!');
        window.location.reload();
      })
      .catch((error) => alert(error));
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form
            className="contact-form my-4"
            name="contact"
            onSubmit={handleSubmit}
          >
            <h2>Let's talk</h2>
            <p>
              Interested in a framed picture? Have some project ideas? Send me a
              message!
            </p>
            <Form.Group className="mt-4" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-4" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-4" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button className="mt-4" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <Image
            className="rounded-circle mt-5"
            src={Profile}
            alt="profilepic"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
