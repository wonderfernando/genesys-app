import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
`
export const HappyCard = styled.div`
   background: ${props=>props.theme["purple-500"]};
   color: #fff;
   display: flex; 
   box-shadow:2px 2px 6px ${props => props.theme.title==="light" ? props.theme["gray-500"] : props.theme["gray-800"]};
    
   position: relative;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;
   width: 50%;
   border-radius: 4px;
   margin-top: 3rem;
   padding: 0 2rem;
   img{
       padding-top:2rem ;
       margin-top: 1rem;
       width: 10rem;
       z-index: 2;
    }
   @media (max-width: 720px) {
    padding: 4rem 2rem;
    width: 100%;
    img{
        display: none;
    }
   }
`
export const CardGroup = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 5rem;
   @media (max-width: 720px) {
    grid-template-columns:1fr;
    gap: 2rem;
   }
`
export const  Polygon = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
    
`
export const  ChartGroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 1rem;
  margin: 2rem 0 ;
  align-items: center;
justify-self: center;
justify-items: center;
 
   @media (max-width: 720px) {
    grid-template-columns: repeat(1,1fr);
   }
`
export const  CardChart = styled.div`
width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 4px;
  align-items: center;
  box-shadow:2px 2px 4px ${props => props.theme.title==="light" ? props.theme["gray-100"] : props.theme["gray-800"]};
  background-color: ${props=>props.theme["sidebar"]};
`
export const  UserSoonUnsubcribe = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
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
