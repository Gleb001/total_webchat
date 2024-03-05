// imports ================================================== //
import type { FC, DetailedHTMLProps, InputHTMLAttributes, HTMLInputElement } from "react";

// main ===================================================== //
type Status = "invalid" | "valid" | "active" | "none"
interface Props {
    changeStatus: (status: Status) => void
};
type InputWithStatus = FC<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
    Props
>

// exports ================================================== //
export type { InputWithStatus };