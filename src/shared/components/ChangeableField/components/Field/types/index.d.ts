// imports ================================================== //
import type { FC, HTMLAttributes } from "react";

// main ===================================================== //
interface Props<T = "input" | "textarea"> {
    type: T,
    current_value: string,
    update: boolean
};
type Field = FC<
    Props<T> &
    HTMLAttributes<T extends "input" ? HTMLInputElement : HTMLTextAreaElement>
>

// exports ================================================== //
export type { Field };