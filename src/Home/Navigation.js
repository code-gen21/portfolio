import React from 'react'
import { Col, Container, Nav, NavItem,Navbar, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './Navigation.css'

function Navigation() {
  return (
    <Navbar expand="lg" className='pt-3'>
        <Container className="d-flex justify-content-around">
            {/* <LinkContainer to="/">
                <Navbar.Brand className="font-title title-head">
                    SK.
                </Navbar.Brand>
            </LinkContainer> */}
            <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav>
                    <LinkContainer to="">
                        <Nav.Link className="mx-5 font-title">
                           <i class="fa-solid fa-house" /> Home
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="">
                        <Nav.Link className="mx-5 font-title">
                            <i class="fa-solid fa-user" /> About
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="">
                        <Nav.Link className="mx-5 font-title">
                           <i class="fa-solid fa-tv" /> Projects
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="">
                        <Nav.Link className="mx-5 font-title">
                           <i class="fa-solid fa-note-sticky"/> Resume
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="">
                        <Nav.Link className="mx-5 font-title">
                          <i class="fa-brands fa-github" /> Github
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Container>
    </Navbar>
  )
}

export default Navigation