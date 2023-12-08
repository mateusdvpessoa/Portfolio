import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import LaravelIcon from "../assets/laravel-icon.png"
import JavaScriptIcon from "../assets/javascript-icon.png"
import CssIcon from "../assets/css-icon.png"
import ReactIcon from "../assets/react-icon.png"
import PhpIcon from "../assets/phpicon.png"
import HtmlIcon from "../assets/html-icon.png"

const SobrePageStyle = styled.section`
    height:80vh;
    background-color:#232121;
    color: #FFF;
    display:flex;
    justify-content:center;
    align-items:center;
    .about-text-section{
        flex-direction:column;
        justify-content: center;
        width:40vw;
        height:50vh;
        border: 1px white solid;
        padding:20px;
        border-radius: 20px;
    }
    .about-text-section p{
        font-size: 1.5em;
        padding:20px;
        text-align: justify;
        display:flex;
        align-items:center;
        justify-content: center;
    }
    abbr{
        text-decoration: none;
    }
    .skill-icon{
        height:5vh;
    }
    .my-skills{
        display: grid;
        width:20vw;
    }
`
export default function Sobre(){
    return(
        <SobrePageStyle>
            <h1>Sobre mim</h1>
            <section class = "about-section">
                <section class = "about-text-section">
                    <h2>Seja bem-vindo!</h2>
                    <p>
                        Sou Mateus Davi, sou da cidade de Arapiraca, no coração de Alagoas. Sou técnico de informática formado pelo IFAL - Campus Arapiraca e graduando em Análise e Desenvolvimento de Sistemas pela Uninter. Tive contato com o serviço público no período da pandemia de 2020, que me abriu portas para a atuação na área de tecnologia voltada para a secretaria de saúde da minha cidade. A partir disso, retomei os estudos sobre programação e venho me desenvolvendo cada dia mais.
                    </p>
                    <p>
                        Sou uma pessoa curiosa, apaixonada por soluções inovadoras e  que busca mergulhar de cabeça no mundo do desenvolvimento web full-stack.
                    </p>
                </section>
            </section>
            <section class = "my-skills">
                <h1>Habilidades</h1>
                <img class = "skill-icon" src={PhpIcon} alt="ícone da linguagem " />
                <img class = "skill-icon" src={LaravelIcon} alt="ícone da linguagem " />
                <img class = "skill-icon" src={CssIcon} alt="ícone da linguagem " />
                <img class = "skill-icon" src={HtmlIcon} alt="ícone da linguagem " />
                <img class = "skill-icon" src={JavaScriptIcon} alt="ícone da linguagem " />
                <img class = "skill-icon" src={ReactIcon} alt="ícone da linguagem " />
            </section>
        </SobrePageStyle>
    )
}