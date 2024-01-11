// imports ================================================== //
import { useState } from "react";
import { ChangeColorTheme } from "./helpers/changeColorTheme";
import type { ButtonChangeColorTheme as ButtonChangeColorThemeType, ColorTheme } from "./types/index";
import { Button } from "@/shared/components/Button";

// main ===================================================== //
export const ButtonChangeColorTheme: ButtonChangeColorThemeType = ({ }) => {

    const [color_theme, setColorTheme] = useState<ColorTheme>("light");

    const handleClick = () => {
        let new_color_theme: ColorTheme = color_theme === "light" ? "dark" : "light";
        ChangeColorTheme(new_color_theme);
        setColorTheme(new_color_theme);
    };

    return (
        <Button onClick={handleClick}>
            Изменить тему на {color_theme === "light" ? "тёмную" : "светлую"}
        </Button>
    );

};
