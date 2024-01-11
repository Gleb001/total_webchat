// imports ================================================== //
import { Component, FC, FormHTMLAttributes } from "react";

// main ===================================================== //
type Form = FC<
    React.DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
>

// export =================================================== //
export type { Form };