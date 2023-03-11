import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './FooterStyle.css';
import pokeballLogo from './pokemon-symbol-logo-png-31 1.png';

class Footer extends React.Component {
    render() {
        return (
            <Navbar id="footer-nav" expand="md">
                <div className='footer-div'>
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
                        <Navbar.Text className='footer-text'>
                            Pokemon Trading Cards. All original content herein is Copyright &copy;{new Date().getFullYear()}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}

export default Footer; 