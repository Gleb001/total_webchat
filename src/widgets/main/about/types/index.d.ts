// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
interface PartText {
    title?: string,
    text?: string
}
interface Props {
    data: PartText[]
};
type AboutUsMain = FC<
    Props
>

// exports ================================================== //
export type { AboutUsMain };