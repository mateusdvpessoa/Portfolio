import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import MainContent from './components/MainContent'

  const GlobalStyle = createGlobalStyle`
    *{
      margin:0;
      padding:0;
      box-sizing: border-box;
    }                  
  `
function App() {
  
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <MainContent/>
      <Main/>
    </>
  )
}

export default App
