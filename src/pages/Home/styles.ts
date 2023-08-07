import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 1rem;
`
export const HappyCard = styled.div`
   background: ${props=>props.theme["purple-500"]};
   color: #fff;
   display: flex; 
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
    img{
        display: none;
        width: 5rem;
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
