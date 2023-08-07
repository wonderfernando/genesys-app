import { styled } from "styled-components";
interface ISideBar{
  $isOpenSideBar: boolean
}

export const SideBarContainer = styled.div<ISideBar>`
    min-height: 100vh;
    transition: 200ms;
    background: ${props=>props.theme["gray-700"]};
    width: ${  props=> props.$isOpenSideBar ? "15rem" : "0" };
  
    @media(max-width: 720px){
      position: absolute;
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
  color: ${props=>props.theme["gray-100"]};
  padding: .5rem;
  font-size: .9rem;
  font-weight: 100;
  font-family: "Roboto";
  &:hover{
   background :  ${props=>props.theme["gray-800"]}; 
  }
 }
 a{
    &.active li
    {
        background:  ${props=>props.theme["purple-700"]}; ;
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
        color: #fff;
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
