import "styled-components"


import { ThemeDefault } from "../styles/Theme/DefaultTheme"

type ThemeType = typeof ThemeDefault;

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}