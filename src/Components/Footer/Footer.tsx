import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FooterStyle.css';
import pokeballLogo from './pokemon-symbol-logo-png-31 1.png';

class Footer extends React.Component {
    render() {
        return (
            <Navbar id="footer-nav" bg="dark" variant = "dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img 
                            alt="Pokeball PNG" 
                            src={pokeballLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{''}
                        Pokemon Trading Cards. All original content herein is Copyright © 2023
                    </Navbar.Brand>
                </Container>
            </Navbar>
            
        )
    }
}

export default Footer; 