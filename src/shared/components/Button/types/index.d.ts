// imports ================================================== //
import type { FC, HTMLAttributes } from "react";

// main ===================================================== //
interface Props {};
type Button = FC<
    HTMLAttributes<HTMLButtonElement> & 
    { children?: React.ReactNode }
>

// exports ================================================== //
export type { Button };