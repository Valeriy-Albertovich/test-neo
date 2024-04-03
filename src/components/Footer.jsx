import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

export default function Footer() {
  return (
    <footer className=''>
      <Navbar className="bg-body-tertiary border rounded-top-4">
        <Container>
          <div>
            <Navbar.Brand href="/" style={{fontWeight: 'bold'}}>QPICK</Navbar.Brand>
          </div>

          <div className='d-flex flex-column'>
            <Navbar.Brand style={{fontSize: '1em'}}>Избранное</Navbar.Brand>
            <Navbar.Brand style={{fontSize: '1em'}}>Корзина</Navbar.Brand>
            <Navbar.Brand style={{fontSize: '1em'}}>Контакты</Navbar.Brand>
          </div>

          <div className='d-flex flex-column align-items-center'>
            <Navbar.Brand style={{fontSize: '1em'}}>Условия сервиса</Navbar.Brand>
            <div>
              <Navbar.Brand><Icon.Globe/></Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1em'}}>Рус</Navbar.Brand>
              <Navbar.Brand style={{fontSize: '1em'}}>Eng</Navbar.Brand>
            </div>
          </div>

          <div>
            <Navbar.Brand><Icon.Github/></Navbar.Brand>
            <Navbar.Brand><Icon.Telegram/></Navbar.Brand>
            <Navbar.Brand><Icon.Whatsapp/></Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </footer>
  )
}
