// imports ================================================== //
import type { FC, ReactNode } from "react";
import type { NavLink } from "../components/NavButton/types";

// main ===================================================== //
interface Props {};
type Nav = FC<
    Props &
    { children: ReactNode | ReactNode[] }    
>

// exports ================================================== //
export type { Nav };