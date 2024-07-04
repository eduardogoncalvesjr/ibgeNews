/* eslint-disable react/jsx-max-depth */
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import getCurrentDate from '../../utils/getCurrentDate';
import './styles.css';
import SearchedNews from '../SearchedNews';
import DataContext from '../../context/DataContext';
import fetchByText from '../../utils/fetchByText';

function OffCanvasNavbar() {
  const { setSearchedNews } = useContext(DataContext);
  const [searchText, setSearchText] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = () => {
    fetchByText(searchText).then((result) => {
      setSearchedNews(result.items);
    });

    setSearchText('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <header className="mb-3">
      <Navbar
        expand={ false }
        bg="primary"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand className="text-light">
            <Link to="/home">IBGE News</Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={ `offcanvasNavbar-expand-${false}` }
            onClick={ handleShow }
          />
          <Navbar.Offcanvas
            id={ `offcanvasNavbar-expand-${false}` }
            aria-labelledby={ `offcanvasNavbarLabel-expand-${false}` }
            placement="end"
            show={ show }
            onHide={ handleClose }
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={ `offcanvasNavbarLabel-expand-${false}` }>
                <Link to="/home">IBGE News</Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                  value={ searchText }
                  onChange={ handleInputChange }
                />
                <Button
                  onClick={ handleSearch }
                  variant="outline-success"
                >
                  Buscar
                </Button>
              </Form>
              <Nav className="justify-content-end flex-grow-1 pe-3 mt-3">
                <Nav.Link
                  as={ Link }
                  to="/home"
                  onClick={ handleClose }
                >
                  Início
                </Nav.Link>
                <Nav.Link
                  as={ Link }
                  to="/favorites"
                  onClick={ handleClose }
                >
                  Favoritos
                </Nav.Link>
                <Nav.Link
                  as={ Link }
                  to="/user-panel"
                  onClick={ handleClose }
                >
                  Painel
                </Nav.Link>
              </Nav>
              <SearchedNews />
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

export default OffCanvasNavbar;
