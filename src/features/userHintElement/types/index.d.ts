// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
interface Props {};
type UserHintElement = FC<
    Props &
    { children?: React.ReactNode }
>

// exports ================================================== //
export type { UserHintElement };