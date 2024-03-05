// imports ================================================== //
import type { FC } from "react";
import type { ModalWindows } from "@/features/ActiveWindows/components/ModalWindow/constants/ModalWindows";
import type { Props as PropsUserNavButton } from "../../UserNavButton/types";

// main ===================================================== //
interface Props {
    data: PropsUserNavButton[]
};
type BlockLinks = FC<Props>

// exports ================================================== //
export type { BlockLinks, Props };