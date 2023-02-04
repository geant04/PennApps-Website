import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="sticky-top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#ttl">PENNAPPS</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#about-us">ABOUT</Nav.Link>
            <Nav.Link href="#apply">APPLY</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;