import styled from 'styled-components'
import GithubIcon from '../assets/github-icon.png'
import LinkedInIcon from '../assets/linkedin-icon.png'

export default function Footer(){

    const FooterStyle = styled.footer`
        background-color:#232121;
        font-weight: 600;
        height:10vh;
        display:flex;
        align-items:center;
        justify-content: center;
        nav{
            width: 8vw;
            display:flex;
            justify-content: space-between;
        }
        img{
            height:6vh;
            width:3vw;
            background-size:50%;
            border-radius:100%;
        }
        img:hover{
            transition: 0.5s;
            background-repeat: no-repeat;
            background-size: 2px;
            background-color: white;
            border-radius:100%;
        }
    `

    return(
        <FooterStyle>
            <nav>
                <a href="github.com/">
                    <img src={GithubIcon} alt="Ícone da plataforma Github" title = "Github"/>
                </a>
                <a href="github.com/">
                    <img src={LinkedInIcon} alt="Ícone da plataforma Github" title = "LinkedIn"/>
                </a>               
            </nav>
        </FooterStyle>
    )
}