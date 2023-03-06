import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopNav.css';
import pokemonLogo from './pokemon-logo-black-transparent.png';

class TopNav extends React.Component {
  render () {
    return (
      <Navbar id="top-nav" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              src={pokemonLogo}
              height="30"
              width="81.82"
              id="pokemon-logo"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="me-auto" >
                  <Nav.Link href="#home" className="top-nav-link">Home</Nav.Link>
                  {/* Search Form */}
                  {/* Filter Form */}
                  {/* Sort by Form */}
                  {/* My cart button */}
                </Nav>
                <Nav>
                
                <NavDropdown title="Sort By" id="basic-nav-dropdown" className="sort-filter">
                  <NavDropdown.Item href="#action/3.2">Price High to Low</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Price Low to High</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Rating High to Low</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Rating Low to High</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Filter" id="basic-nav-dropdown" className="sort-filter">
                  <NavDropdown.Item href="#action/3.6">
                    <Form className="mb-3">
                      <Form.Group>
                        <Form.Label>Rarity</Form.Label>
                        <Form.Check type="checkbox" label="Common" />
                        <Form.Check type="checkbox" label="Uncommon" />
                        <Form.Check type="checkbox" label="Rare" />
                      </Form.Group>
                      <Button variant="primary" type="submit">Search Filter</Button>
                    </Form>
                  </NavDropdown.Item>
                </NavDropdown>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopNav;