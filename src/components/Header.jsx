import React, { Component } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Main from '../pages/Main'
import ShoppingCart from '../pages/ShoppingCart'
import LikedStuff from '../pages/LikedStuff'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';


export class Header extends Component {
  render() {
    return (
      <header style={{flex: '1 1 auto'}}>
        <Navbar className="bg-body-tertiary rounded-bottom-4">
          <Container>
            <Navbar.Brand href="/" style={{fontWeight: 'bold'}}>QPICK</Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link className='mx-2' href="/liked"><Icon.Heart/></Nav.Link>
            <Nav.Link className='mx-2' href="/cart"><Icon.Cart/></Nav.Link>

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