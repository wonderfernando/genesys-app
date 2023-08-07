import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border-radius: 4px;
    align-items: center;
    box-shadow: 0 2px 10px ${props=>props.theme["gray-800"]};
    background-color: ${props=>props.theme["gray-700"]};
    img{
        width: 3rem;
        height: 3rem;
    }
    div{
        display: flex;
        flex-direction: column;
        span{
            font-family: "Roboto";
            font-size: .875rem;
        }
        strong{
            font-size: 3rem;
            font-family: "Roboto Mono";
        }
    }
    
`
