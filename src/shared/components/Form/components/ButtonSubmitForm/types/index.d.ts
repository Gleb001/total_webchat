// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
interface Props {
    isWait: boolean
};
type ButtonSubmitForm = FC<
    Props &
    { children?: React.ReactNode }
>

// exports ================================================== //
export type { ButtonSubmitForm };