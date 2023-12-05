import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

  const GlobalStyle = createGlobalStyle`
    *{
      margin:0;
      padding:0;
      box-sizing: border-box;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }                  
  `
function App() {
  
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = "/" element ={<Inicio/>}/>
          <Route path = "/sobre" element ={<Sobre/>}/>
          <Route path = "/projetos" element ={<Projetos/>}/>
          <Route path = "/contato" element ={<Contato/>}/>  
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
