// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
interface Props {};
type UserContainer = FC<
    Props &
    { children?: React.ReactNode }
>

// exports ================================================== //
export type { UserContainer };