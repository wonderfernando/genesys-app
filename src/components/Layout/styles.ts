import styled from "styled-components";

export const LayoutConteiner = styled.div`
    display: flex;
    position: relative;
   
`
export const MainConteiner = styled.div`
flex: 1;
background:${props=>props.theme["background"]};
width: 100%;
`
