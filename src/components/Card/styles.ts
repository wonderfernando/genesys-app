import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border-radius: 4px;
    align-items: center;
    box-shadow:2px 2px 4px ${props => props.theme.title==="light" ? props.theme["gray-100"] : props.theme["gray-800"]};
    background-color: ${props=>props.theme["sidebar"]};
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
