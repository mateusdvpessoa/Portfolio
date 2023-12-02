import styled from 'styled-components'

export default function Header(){

    const HeaderStyle = styled.header`
        border:1px solid red;
        font-weight: 600;
        text-decoration:none;
        height:12vh;
        display:flex;
        align-items:center;
        ul{
            display:flex;
            width:40vw;
            align-items:center;
            justify-content: space-evenly;
            list-style:none;
        }
    `

    return(
        <HeaderStyle>
            <nav>
                <ul>
                    <li>Início</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Vamos conversar</li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}