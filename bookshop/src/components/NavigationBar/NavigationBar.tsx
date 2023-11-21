import { Navbar, Container, Nav, InputGroup, Form, Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">B-World</Navbar.Brand>
        <Nav className="gap-2">
          <InputGroup >
            <Form.Control
              placeholder="Type any book here"
              aria-label="Type any book here"
            />
            <Button variant="outline-secondary" id="button-addon2">
            <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
          <Nav.Link href="/cart"><i className="bi bi-cart4"></i></Nav.Link>
          <div className="vr"></div>
          <Nav.Link href="#liked"><i className="bi bi-heart-fill"></i></Nav.Link>
          <div className="vr"></div>
          <Nav.Link href="#myprofile"><i className="bi bi-person-fill"></i></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { NavigationBar }
