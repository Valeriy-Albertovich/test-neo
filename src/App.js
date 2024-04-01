import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {

  return (
    <div 
      style={{width: '80vw', height: '100vh'}}
      className='container d-flex flex-column justify-content-between'
    >
      <Header />
      
      <Footer />
    </div>
  )
}
