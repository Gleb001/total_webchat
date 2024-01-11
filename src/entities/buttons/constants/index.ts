// imports ================================================== //
import type { ColorTheme } from "../types";

// types ==================================================== //
interface ColorThemeVariablesCSS {

    "--main-back-color": string,
    "--additional-back-color": string,

    "--main-title-color": string,
    "--main-text-color": string,
    "--main-button-color": string,


}
interface ThemeColors {
    [key: ColorTheme | string]: ColorThemeVariablesCSS
}

// main ===================================================== //
export const THEME_COLORS: ThemeColors = {

    light: {

        "--main-back-color": "white",
        "--additional-back-color": "#212326",

        "--main-title-color": "black",
        "--main-text-color": "#4E4E4E",
        "--main-button-color": "#808080",

    },

    dark: {

        "--main-back-color": "#212326",
        "--additional-back-color": "#35383E",

        "--main-title-color": "white",
        "--main-text-color": "#808080",
        "--main-button-color": "white",

    },

};