import React, { Component } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Main from '../pages/Main'
import ShoppingCart from '../pages/ShoppingCart'
import LikedStuff from '../pages/LikedStuff'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <header>
        <Navbar className="bg-body-tertiary rounded-bottom-4">
          <Container>
            <Navbar.Brand href="/" className=''>QPICK</Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/liked">&#128159;</Nav.Link>
              <Nav.Link href="/cart">&#129530;</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="/cart" element={<ShoppingCart />}/>
              <Route path="/liked" element={<LikedStuff />}/>
          </Routes>
        </Router>

      </header>
    )
    }
}

export default Header