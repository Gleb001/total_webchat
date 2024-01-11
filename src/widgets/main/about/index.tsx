// imports ================================================== //
import { getText } from "./helpers/getText";
import type { AboutUsMain as AboutUsMainType } from "./types/index";

// main ===================================================== //
export const AboutUsMain: AboutUsMainType = ({ data }) => {
    return (
        <>{ getText(data) }</>
    );
};
