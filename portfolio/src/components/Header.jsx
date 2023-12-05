import styled from 'styled-components'
import Inicio from './Inicio'
import Sobre from './Sobre'
import Projetos from './Projetos'
import Contato from './Contato'
import { Link } from 'react-router-dom'

export default function Header(){

    const HeaderStyle = styled.header`
        background: linear-gradient(180deg, rgba(34,193,195,1) 0%, #ffffff 180%);
        box-shadow: 0px 0px 10px orange;
        font-weight: 600;
        text-decoration:none;
        height:10vh;
        display:flex;
        align-items:center;
        justify-content: center;
        font-size:2vh;
        color:orange;
        text-decoration: none;
        ul{
            display:flex;
            width:40vw;
            align-items:center;
            justify-content: space-evenly;
            list-style:none;
        }
        a{
            background-color:transparent;
            text-decoration: none;
            color:white;
            text-shadow: 0px  0px 10px #630d49;
        }

        a:hover{
            transition:0.5s;
            transform: scale(1.1);
            color:orange;
            cursor:pointer;
            border-bottom: white;
        }
    `

    return(
        <HeaderStyle>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="Sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="Projetos">Projetos</Link>
                    </li>
                    <li>
                        <Link to="Contato">Vamos conversar</Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}