import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopNav.css';
import pokemonLogo from './pokemon-logo.png';

class TopNav extends React.Component {
  render () {
    return (
      <Navbar id="top-nav" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              src={pokemonLogo}
              height="30"
              width="82.05"
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
                  {/* Add to cart button */}
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopNav;