import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"

const SobrePageStyle = styled.section`
    
`
export default function Sobre(){
    return(
        <SobrePageStyle>
            <HeaderStyle/>
            <h1>Sobre mim</h1>
        </SobrePageStyle>
    )
}