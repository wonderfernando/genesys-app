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
export const Content = styled.div`
max-height: 100vh;
overflow: scroll;
background:${props=>props.theme["background"]};
width: 100%;
&::-webkit-scrollbar {
  width: 5px;
  height: 3px; /* A altura só é vista quando a rolagem é horizontal */
}

&::-webkit-scrollbar-track {
  background: transparent;
  padding: 2px;
}

&::-webkit-scrollbar-thumb {
  background-color: ${props=>props.theme["purple-100"]};
  border-radius: 2px;
}
 
 
`
