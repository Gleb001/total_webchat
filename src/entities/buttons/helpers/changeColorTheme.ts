// imports ================================================== //
import { THEME_COLORS } from "../constants";
import { ColorTheme } from "../types";

// types ==================================================== //
type ChangeColorTheme = (theme: ColorTheme) => void

// main ===================================================== //
export const ChangeColorTheme: ChangeColorTheme = (theme) => {
    
    const colors_theme = THEME_COLORS[theme];

    for (let css_variable in colors_theme) {
        document.documentElement.style.setProperty(
            css_variable,
            colors_theme[css_variable as keyof typeof colors_theme]
        );
    }

}