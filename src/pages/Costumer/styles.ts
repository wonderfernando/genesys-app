import styled from "styled-components";

export const CostumerContainer = styled.div`
    padding: 1rem;
`
export const ButtonAddNewCostumer = styled.button`
        border-radius: 4px;
        padding: .5rem;
        font-size: .875rem;
        color: #fff;
        display: flex;
        align-items: center;
        transition: 200ms;
        background: ${props=>props.theme["green-500"]};
        &:hover{
          background: ${props=>props.theme["green-300"]};
        }
`
 
export const  UserSoonUnsubcribe = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  overflow: auto;
  box-shadow:2px 2px 4px ${props => props.theme.title==="light" ? props.theme["gray-100"] : props.theme["gray-800"]};
  background-color: ${props=>props.theme["sidebar"]};
  table{
    min-width: 600px;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    button{
      border-radius: 4px;
        padding: .5rem;
        font-size: .875rem;
        color: #fff;
        display: flex;
        align-items: center;
        transition: 200ms;
        background: ${props=>props.theme["green-500"]};
        &:hover{
          background: ${props=>props.theme["green-300"]};
        }
    }
    th{
        font-size: .875rem;
        text-align: left;
        line-height: 1.6;
        padding: 1rem;
    }
    td{
          border-top: 1px solid  ${props=>props.theme["background"]};
          padding: 1rem;
          line-height: 1.6;
          font-size: .875rem;
          &:first-child{
            width: 20%;
          }
    }
  }
 
  
  h1{
    text-align: left;
    font-size: 1.875rem;
  }
 
`


