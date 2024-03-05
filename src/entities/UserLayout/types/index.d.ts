// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
interface Props {};
type UserLayout = FC<
    Props &
    { children?: React.ReactNode }
>

// exports ================================================== //
export type { UserLayout };