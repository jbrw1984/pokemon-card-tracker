import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FooterStyle.css';
import pokeballLogo from './pokemon-symbol-logo-png-31 1.png';

class Footer extends React.Component {
    render() {
        return (
            <Navbar id="footer-nav">
                <Container>
                    <Navbar.Brand href="#home" id="footer-brand-text" className='text-white mx-auto'>
                        <img 
                            alt="Pokeball PNG" 
                            src={pokeballLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Pokemon Trading Cards. All original content herein is Copyright &copy;{new Date().getFullYear()}
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default Footer; 