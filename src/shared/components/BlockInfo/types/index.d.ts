// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
interface Props {};
type BlockInfo = FC<
    Props &
    { children?: React.ReactNode }
>

// exports ================================================== //
export type { BlockInfo };