import { Avatar, HeaderContainer,ToolHeader, RootSwitch, ThemeModeDescription, ThumbSwitch } from "./styles";
import {ListDashes,Bell,Envelope} from "phosphor-react"
import avatar from "../../assets/avatar.jpg"
import { useState } from "react";
interface IHeader{
    toggleSideBar: () => void
}
export default function Header({toggleSideBar} : IHeader) {
    const[isDarkMode, setDarkMode] = useState(true)
    function onCheckedChange() {
        setDarkMode(!isDarkMode)
    }
    return (
        <HeaderContainer>
            <div>
                <button onClick={toggleSideBar}><ListDashes size={24}/></button>
            </div>
    
            <ToolHeader>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
                    {isDarkMode ? <ThemeModeDescription>Modo Escuro</ThemeModeDescription> : <ThemeModeDescription>Modo Claro</ThemeModeDescription>}
                    </label>
                    <RootSwitch onCheckedChange={onCheckedChange} checked={isDarkMode} className="SwitchRoot" id="airplane-mode">
                        <ThumbSwitch className="SwitchThumb" />
                    </RootSwitch>
                 </div>
                    <button><Bell size={20}/></button>
                    <button><Envelope size={20}/></button>
                    <Avatar src={avatar}/>    
            </ToolHeader>
              
            
        </HeaderContainer>
    )
}