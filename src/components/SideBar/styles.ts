import { styled } from "styled-components";
interface ISideBar{
  $isOpenSideBar: boolean
}

export const SideBarContainer = styled.div<ISideBar>`
    box-shadow: 30px #000;
    min-height: 100vh;
    transition: 200ms;
    background: ${props=>props.theme["sidebar"]};
    width: ${  props=> props.$isOpenSideBar ? "15rem" : "0" };
  
    @media(max-width: 720px){
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 80%;
      transform: translatex(${ props=> props.$isOpenSideBar ? "0" : "-1000px" });
      button{
        display: block;
      }
    }
`
export const LogoContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 .5rem;
  gap: 0.5rem;
  button{
    color: red;
  }
  span{
    font-weight: bold;
  }
`
export const NavList = styled.div`
  padding: 0 .5rem;
  ul{
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
 }
 li{
  margin-bottom: .8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 4px;
  transition: 200ms;
  color: ${ props => props.theme["text-500"] };
  padding: .5rem;
  font-size: .9rem;
  font-weight: bold;
  font-family: "Roboto";
  &:hover{
      color: ${ props => props.theme["text"] };
      background :  ${props=>props.theme["purple-100"]}; 
  }
 }
 a{
    &.active li
    {
      color: ${ props => props.theme["white"] };
        background:  ${props=>props.theme["purple-700"]}; 
    }
 }
`

export const TopSideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
   border-bottom: 2px solid #333;
    button{
      display: none;
      background: transparent;
      color: #000;
      padding: .5rem;
      &:hover{
            background: ${props=>props.theme["gray-800"]};   
      }
    }
    @media(max-width: 720px){
      button{
        display: block;
      }
    }
`
