import styled from 'styled-components'
import MainContent from './MainContent'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Header(){

    const HeaderStyle = styled.header`
        background-color: #8ff8f8;
        font-weight: 600;
        text-decoration:none;
        height:10vh;
        display:flex;
        align-items:center;
        justify-content: center;
        font-size:2vh;
        ul{
            display:flex;
            width:40vw;
            align-items:center;
            justify-content: space-evenly;
            list-style:none;
        }
        Link:hover{
            transition:0.5s;
            transform: scale(1.1);
            color:rgb(230, 39, 230);
            cursor:pointer;
            border-bottom: white;
        }
    `

    return(
        <BrowserRouter>
            <HeaderStyle>
                <nav>
                    <ul>
                        <Link to ="/">Início</Link>
                        <Link to ="/sobre">Sobre</Link>
                        <Link to ="/projetos">Projetos</Link>
                        <Link to ="/contato">Vamos conversar</Link>
                    </ul>
                </nav>
            </HeaderStyle>
            <Routes>
                <Route path ="/" element ={<MainContent/>}/>
                <Route path ="/sobre" element ={<Sobre/>}/>
                <Route path ="/projetos" element ={<Projetos/>}/>
                <Route path ="/contato" element ={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    )
}