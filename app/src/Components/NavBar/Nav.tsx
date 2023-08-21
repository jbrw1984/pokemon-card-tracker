import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './TopNav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pokemonLogo from './pokemon-logo-black-transparent.png';
import cartImg from './cart.png';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

interface Props {
  onSearchChange?: any,
  onSortClick?: any,
  onOrderClick?: any
}

function TopNav ({ onSearchChange, onSortClick, onOrderClick }: Props) {

  // When the user sorts the cards
  const handleSortClick = (e: any) => {
    // Change the sort value (Classes correspond to the sort type)
    onSortClick(e.target.classList[0]);
    onOrderClick(e.target.classList[1]);
    console.log(`Sorted: ${e.target.classList[0]} in ${e.target.classList[1]} order`);
  }

  // When the user searches for a card.
  const handleSearchChange = (e: any) => {
    // Change the search value 
    onSearchChange(e.currentTarget[0].value);
    console.log(`Searched: ${e.currentTarget[0].value}`);
  }

  // When the user filters by price
  const handleFilterSubmit = (e: any) => {
    
  }

  return (
    <Navbar id="top-nav" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img 
              src={pokemonLogo}
              height="30"
              width="81.82"
              id="pokemon-logo"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto" >
                <Nav.Link href="#home" className='collapse-btn'><Link className="top-nav-link" to="/">Home</Link></Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown title="Sort By" id="basic-nav-dropdown" className="sort-filter collapse-btn">
                  <NavDropdown.Item onClick={handleSortClick} className="salePrice desc">Price High to Low</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleSortClick} className="salePrice asc">Price Low to High</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleSortClick} className="rating desc">Rating High to Low</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleSortClick} className="rating asc">Rating Low to High</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Filter" id="basic-nav-dropdown" className="sort-filter collapse-btn">
                  <Form className="mb-3" onSubmit={handleFilterSubmit}>
                    <Form.Control 
                      className="filter-price" 
                      type="number" 
                      placeholder="$0.00" 
                      min={0}
                    />
                    <Form.Control 
                      className="filter-price" 
                      type="number" 
                      placeholder="$1000.00" 
                      min={0}
                    />
                    <Button variant="primary" type="submit">Search Filter</Button>
                  </Form>
                </NavDropdown>
                <Form className="d-flex collapse-btn" id="nav-search" onChange={handleSearchChange}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
                <Navbar.Brand href="#cart" className='collapse-btn'>
                  <img 
                    src={cartImg}
                    height="30"
                    width="30"
                    id="cart-img"
                    alt="Add To Cart"
                  />
                </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
