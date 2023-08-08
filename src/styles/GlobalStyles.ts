import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        outline: transparent;
    }
    input:focus{
        transition: 200ms;
        box-shadow: 0 0 0 2px ${props=>props.theme["purple-500"]};
    }
    button{
        cursor: pointer;
    }
    body {
       overflow-y: hidden;
        background: ${props=>props.theme["background"]};
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: ${props=>props.theme["text"]};;
    } 
    input,textarea,button{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    img{
        max-width: 100%;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    html{
        @media (max-width: 1080px){
            font-size: 93.75%;   
        }
        
        @media (max-width: 720px){
            font-size: 87.5%;
        }
     }
`