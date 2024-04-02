import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

export default function Footer() {
  return (
    <footer>
      <Navbar className="bg-body-tertiary border rounded-top-4">
        <Container>
          <div>
            <Navbar.Brand>QPICK</Navbar.Brand>
          </div>

          <div className='d-flex flex-column'>
            <Navbar.Brand>Избранное</Navbar.Brand>
            <Navbar.Brand>Корзина</Navbar.Brand>
            <Navbar.Brand>Контакты</Navbar.Brand>
          </div>

          <div className='d-flex flex-column'>
            <Navbar.Brand>Условия сервиса</Navbar.Brand>
            <div>
              <Navbar.Brand><Icon.Globe/></Navbar.Brand>
              <Navbar.Brand>Рус</Navbar.Brand>
              <Navbar.Brand>Eng</Navbar.Brand>
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
