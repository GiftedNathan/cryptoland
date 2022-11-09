import React from 'react'

import { Link } from 'react-router-dom'

import {Container, Nav, Navbar, Button, NavDropdown} from 'react-bootstrap'

import LogoImage from '../assets/images/coin-image.png'

const Navigationbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand ><Link to={'/'}><img style={{width: 40, height: 40}} src={LogoImage} alt='logo image'/> Cryptoland</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">

          <Link className='m-2' to={'/'}>
              <Button variant="primary">
                Home
              </Button>
            </Link>

            <Link className='m-2' to={'/cryptocurrencies'}>
              <Button variant="secondary">
                Cryptocurrencies
              </Button>
            </Link>

            <Link className='m-2' to={'/exchanges'}>
              <Button variant="secondary">
                Exchanges
              </Button>
            </Link>

            <Link className='m-2' to={'/news'}>
              <Button variant="secondary">
                News
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



