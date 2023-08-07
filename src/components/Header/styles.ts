import { styled } from "styled-components";
import * as Switch from "@radix-ui/react-switch"
export const HeaderContainer = styled.div`
    
    background: ${props=>props.theme["background"]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:.5rem 1rem;
    button{
        background: transparent;
        color:  ${props=>props.theme["text"]};
        padding: .5rem;
        &:hover{
            background: ${props=>props.theme["sidebar"]};
        }
    }
    div:last-child{
        display: flex;
        gap: .6rem;
        padding-right: 1rem;
    }

`
export const RootSwitch = styled(Switch.Root)`
  width: 42px;
  height: 25px;
  background-color: red;
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px #808080;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: transparent;
 
    &[data-state='checked'] {
      background-color: white;
      &:hover{
        background-color: white;
      }
    }
    &[data-state='unchecked'] {
      background-color:#333;
    }
`

export const ThumbSwitch = styled(Switch.Thumb)`
   display: block;
    width: 21px;
    height: 21px;
    background-color: white;
    border-radius: 9999px;
    box-shadow: 0 2px 2px var(--black-a7);
    transition: transform 100ms;
    transform: translateX(2px);
    will-change: transform;
    position: absolute;
    top: 2px;
    left: 0;
    &[data-state='checked'] {
         transform: translateX(19px);
         background-color: #333;
    }

`
export const ThemeModeDescription = styled.span`
     font-size: .875rem;
  
`
export const Avatar = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius:999px;
     font-size: .875rem;
  
`
export const ToolHeader = styled.div`
    display: flex;
    align-items: center;
  
`