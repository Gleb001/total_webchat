// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
interface Props {};
type Profile = FC<
    Props &
    { children?: React.ReactNode }
>

// exports ================================================== //
export type { Profile };