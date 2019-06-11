import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const navbar = () => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="#home">Carousel</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)

export default navbar;
