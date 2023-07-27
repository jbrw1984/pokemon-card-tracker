import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopNav.css';
import pokemonLogo from './pokemon-logo-black-transparent.png';
import cartImg from './cart.png';
import { Link } from 'react-router-dom';

interface Props {
  onChange?: any
}

function TopNav ({ onChange }: Props) {
  // When the user searches for a card.
  const handleSearchChange = (e: any) => {
    // Change the search value 
    onChange(e.currentTarget[0].value);
    console.log("Searched");
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
                  <NavDropdown.Item href="#action/3.2">Price High to Low</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Price Low to High</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Rating High to Low</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Rating Low to High</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Filter" id="basic-nav-dropdown" className="sort-filter collapse-btn">
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
