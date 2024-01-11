// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
type ColorTheme = "dark" | "light"

interface Props {};
type ButtonChangeColorTheme = FC<
    Props
>

// exports ================================================== //
export type { ButtonChangeColorTheme, ColorTheme };