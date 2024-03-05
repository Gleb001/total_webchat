// imports ================================================== //
import type { FC } from "react";
import type { ModalWindows } from "@/features/ActiveWindows/constants/ModalWindows";

// main ===================================================== //
interface Props {
    title: keyof ModalWindows,
    icon_className?: string
};
type UserNavButton = FC<Props>

// exports ================================================== //
export type { UserNavButton, Props };