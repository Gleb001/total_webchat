// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
interface Props {
    info: string
};
type HintToUse = FC<
    Props &
    { children?: React.ReactNode }
>

// exports ================================================== //
export type { HintToUse };