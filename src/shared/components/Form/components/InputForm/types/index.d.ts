// imports ================================================== //
import type { FC, DetailedHTMLProps, InputHTMLAttributes, HTMLInputElement } from "react";

// main ===================================================== //
interface Props {
    title: string,
    hint?: string
}
type InputForm = FC<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
    Props
>

// exports ================================================== //
export type { InputForm, Status };