// imports ================================================== //
import type { FC, HTMLAttributes } from "react";

// main ===================================================== //
interface Props<T = "input" | "textarea"> {
    type: T,
    current_value: string
};
type ChangeableField = FC<
    Props<T> &
    HTMLAttributes<T extends "input" ? HTMLInputElement : HTMLTextAreaElement>
>

// exports ================================================== //
export type { ChangeableField };