// imports ================================================== //
import type { FC } from "react";
import { ModalWindows } from "@/features/ActiveWindows/constants/ModalWindows";

// main ===================================================== //
interface Props {
    title: keyof ModalWindows,
};
type ModalWindow = FC<
    Props &
    { children?: React.ReactNode }
>

// exports ================================================== //
export type { ModalWindow };