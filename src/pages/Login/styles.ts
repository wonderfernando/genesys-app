import styled from "styled-components";


export const LoginContainer = styled.div`
    max-width: 100%;
    width: 480px;
    border-radius: 4px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a{
        color: ${props=>props.theme["gray-500"]};
    }
`
export const TopLogin = styled.div`
    text-align: center;
    line-height: 1.6;
    margin-bottom: 2rem;
`
export const FormContainer = styled.div`
width: 100%;
padding: 0 1rem;
 
form{
    width: 100%;
    gap: .8rem;
    display: flex;
    flex-direction: column;
    label{
        color: ${props=>props.theme["gray-300"]};;
    }
    div{
        gap: .4rem;
        display:flex;
        flex-direction:column;
    }
    input{
        padding: .8rem;
        border-radius: 4px;
        color: #fff;
        background: ${props=>props.theme["gray-700"]};
    }
    button{
        width: 100%;
        height: 3rem;
        border-radius: 4px;
        font-weight: bold;
        color: #fff;
        transition: 200ms;
        background: ${props=>props.theme["purple-700"]};
        &:hover{
            background: ${props=>props.theme["purple-500"]};
            transform: scale(1.01);
        }
    }
    
    
}

`
export const ButtomContainer = styled.div`
    margin: 1rem 0;
    padding: 0 .5rem ;
`
 
export const FooterLogin = styled.div`

`
