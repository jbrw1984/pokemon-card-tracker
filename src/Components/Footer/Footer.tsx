import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FooterStyle.css';
import pokeballLogo from './pokemon-symbol-logo-png-31 1.png';

class Footer extends React.Component {
    render() {
        return (
            <Navbar id="footer-nav" expand="lg">
                <Container id="footer-container">
                    <Navbar.Brand href="#home" >
                        <img 
                            alt="Pokeball PNG" 
                            src={pokeballLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse>
                    <Navbar.Text>
                        Pokemon Trading Cards. All original content herein is Copyright &copy;{new Date().getFullYear()}
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Footer; 