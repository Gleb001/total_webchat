// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
interface Props {
    title: string
};
type Header = FC<
    Props &
    { children?: React.ReactNode }
>

// exports ================================================== //
export type { Header };