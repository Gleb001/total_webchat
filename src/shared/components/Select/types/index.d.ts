// imports ================================================== //
import type { FC, HTMLAttributes } from "react";

// helpers ================================================== //
interface OptionData {
    value: any,
    text: string,
    isSelected?: boolean
}
type Data = Array<OptionData> 

// main ===================================================== //
interface Props {
    data: Data
};
type Select = FC<
    Props &
    HTMLAttributes<HTMLSelectElement>
>

// exports ================================================== //
export type { Select, Data, OptionData };