import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"

const SobrePageStyle = styled.section`
    height:80vh;
    background-color:#232121;
    color: #FFF;
    display:flex;
    justify-content:center;
    align-items:center;
    .about-text{
        width:80vw;
        height:30vh;
    }
    .about-text p{
        color:black;
        display:flex;
        align-items:center;
        justify-content: center;
        background-color: #8ff8f8;
        width:35vw;
        height:20vh;
    }
    abbr{
        text-decoration: none;
    }
`
export default function Sobre(){
    return(
        <SobrePageStyle>
            <h1>Sobre mim</h1>
            <section class = "about-text">
                <p>
                    Sou Mateus Davi, sou da cidade de Arapiraca, no coração de Alagoas. Sou técnico de informática pelo IFAL - Campus Arapiraca e graduando em Análise e Desenvolvimento de Sistemas pela Uninter. Tive contato com o serviço público no período da pandemia de 2020, que me abriu portas para a atuação na área de tecnologia voltada para a secretaria de saúde da minha cidade. A partir disso, retomei os estudos sobre programação e venho me desenvolvendo cada dia mais.
                </p>
                <p>
                    Sou um curioso, apaixonado por soluções inovadoras,  que busca mergulhar de cabeça no mundo do desenvolvimento web full-stack.
                </p>
            </section>
        </SobrePageStyle>
    )
}