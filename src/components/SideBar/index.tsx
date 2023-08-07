import { LogoContainer, NavList, SideBarContainer, TopSideBar } from "./styles";
import logo from "../../assets/react.svg"
import { BoundingBox,UsersThree,ListBullets, ArrowCircleUp,Money, X } from "phosphor-react";
import { NavLink, useLocation } from "react-router-dom";
import {useEffect} from "react"

interface ISideBar {
    isOpenSideBar: boolean,
    toggleSideBar: ()=>void
}
export default function SideBar({isOpenSideBar,toggleSideBar}: ISideBar) {
   
    const location = useLocation() 
 
    useEffect(()=>{
        const match = window.matchMedia("(max-width: 720px)").matches

        console.log(match)
        if (match) {
            console.log("match")
            toggleSideBar()
        }
    },[location])

    return (
        <SideBarContainer $isOpenSideBar={isOpenSideBar}>
            <TopSideBar>
             <LogoContainer>
                <img src={logo} alt="" /> <span>Genesys</span>
           </LogoContainer>
           <button onClick={toggleSideBar}><X size={24}/></button>
           </TopSideBar>
           <NavList>
                <ul>
                    <NavLink to="/"><li><BoundingBox/> Dashboard</li></NavLink>
                    <NavLink to="/clientes"><li><UsersThree/> Clientes</li></NavLink>
                    <NavLink to="/planos"><li><ListBullets/> Planos</li></NavLink>
                    <NavLink to="/pagamentos"><li><Money/> Pagamentos</li></NavLink>
                    <NavLink to="/transacoes"><li><ArrowCircleUp/> Transaçoes</li></NavLink>
                </ul>
           </NavList>
        </SideBarContainer>
    )
}