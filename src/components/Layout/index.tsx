import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import Header from "../Header";
import { Content, LayoutConteiner,MainConteiner } from "./styles";
import { useState } from "react";

export default function Layout({changeMode,isDarkMode}: {changeMode:()=>void, isDarkMode:boolean}) {
    const match = window.matchMedia("(max-width: 720px)").matches
    console.log(match)
    const[isOpenSideBar, setOpenSideBar] = useState(!match)
    function toggleSideBar() {
        setOpenSideBar(state => !state)
    }
    

    return (
        <LayoutConteiner>
             <SideBar toggleSideBar={toggleSideBar} isOpenSideBar={isOpenSideBar}/>
             <MainConteiner>
                <Header isDarkMode={isDarkMode} changeMode={changeMode} toggleSideBar={toggleSideBar}/>
                <Content>
                    <Outlet/>
                </Content>
           
             </MainConteiner>
          
        </LayoutConteiner>
       
    )
}