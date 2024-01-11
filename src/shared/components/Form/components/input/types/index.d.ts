// imports ================================================== //
import type { FC, HTMLAttributes, HTMLInputTypeAttribute, HtmlHTMLAttributes, InputHTMLAttributes, ReactElement } from "react";

// main ===================================================== //
interface Props {
    title: string,
}
type InputForm = FC<
    React.DetailedHTMLProps<React.InputHTMLAttributes, HTMLInputElement> &
    Props
>

// exports ================================================== //
export type { InputForm };