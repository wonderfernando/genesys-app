import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import Header from "../Header";
import { LayoutConteiner,MainConteiner } from "./styles";
import { useState } from "react";

export default function Layout() {
    const match = window.matchMedia("(max-width: 720px)").matches
    console.log(match)
    const[isOpenSideBar, setOpenSideBar] = useState(false)
    function toggleSideBar() {
        setOpenSideBar(state => !state)
    }
    

    return (
        <LayoutConteiner>
             <SideBar toggleSideBar={toggleSideBar} isOpenSideBar={isOpenSideBar}/>
             <MainConteiner>
                <Header toggleSideBar={toggleSideBar}/>
                <Outlet/>
             </MainConteiner>
          
        </LayoutConteiner>
       
    )
}