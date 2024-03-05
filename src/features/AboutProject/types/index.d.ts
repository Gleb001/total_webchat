// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
interface Props {};
type InputInfo = FC<
    Props &
    { children?: React.ReactNode }
>

// exports ================================================== //
export type { InputInfo };