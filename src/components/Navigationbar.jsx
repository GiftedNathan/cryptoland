import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom'

import {Container, Nav, Navbar, Button, NavDropdown} from 'react-bootstrap'

const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand ><Link to={'/'}>logo</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Link className='m-2' to={'/cryptocurrencies'}>
              <Button variant="secondary">
                cryptocurrencies
              </Button>
            </Link>

            <Link className='m-2' to={'/exchanges'}>
              <Button variant="secondary">
                exchanges
              </Button>
            </Link>

            {/* <Nav.Link >Features</Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Navigationbar



