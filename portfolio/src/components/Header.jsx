import styled from 'styled-components'

export default function Header(){

    const HeaderStyle = styled.header`
        border:1px solid red;
        font-weight: 600;
        text-decoration:none;
        
        ul{
            display:flex;
            align-items:center;
            justify-content: space-evenly;
            list-style:none;
        }
        li:hover{
            /* Teste de propriedade de brilho sobre a tag li */
            /* box-shadow: rgba(78, 226, 78, 0.8) 0 0 90px 33px; */
        }   
    `

    return(
        <HeaderStyle>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About me</li>
                    <li>Contact me</li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}