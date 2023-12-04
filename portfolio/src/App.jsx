import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

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
      <BrowserRouter>
        <GlobalStyle/>
        <Header/>
        <MainContent/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
