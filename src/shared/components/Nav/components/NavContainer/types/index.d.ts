// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
interface Props {};
type NavContainer = FC<
    Props &
    { children?: React.ReactNode }
>

// exports ================================================== //
export type { NavContainer };