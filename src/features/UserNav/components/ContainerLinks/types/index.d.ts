// imports ================================================== //
import type { FC } from "react";
import type { Props as PropsBlockLinks } from "../../BlockLinks/types";

// main ===================================================== //
interface Props {
    data: PropsBlockLinks["data"][]
};
type ContainerLinks = FC<Props>

// exports ================================================== //
export type { ContainerLinks, Props };