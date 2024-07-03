/* eslint-disable react/jsx-max-depth */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import getCurrentDate from '../../utils/getCurrentDate';
import './styles.css';

function OffcanvasExample() {
  return (
    <header className="mb-3">
      <Navbar
        expand={ false }
        bg="primary"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#">IBGE News</Navbar.Brand>
          <Navbar.Toggle aria-controls={ `offcanvasNavbar-expand-${false}` } />
          <Navbar.Offcanvas
            id={ `offcanvasNavbar-expand-${false}` }
            aria-labelledby={ `offcanvasNavbarLabel-expand-${false}` }
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={ `offcanvasNavbarLabel-expand-${false}` }>
                IBGE News
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
              <Nav className="justify-content-end flex-grow-1 pe-3 mt-3">
                <Nav.Link href="#action1">Favoritos</Nav.Link>
                <Nav.Link href="#action2">Painel</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="current_date text-center p-1">
        {getCurrentDate()}
      </div>
    </header>
  );
}

export default OffcanvasExample;
