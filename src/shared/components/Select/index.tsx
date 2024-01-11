// imports ================================================== //
import getOptions from "./helpers/getOptions";
import type { Select as SelectType } from "./types/index";
import { concatObjects } from "@/shared/libs/concatObjects";
import styles from "./ui/index.module.css";

// main ===================================================== //
export const Select: SelectType = ({ data, ...props }) => {

    const attributes = { className: styles.select };

    return (
        <select {...concatObjects(props, attributes)}>{
            getOptions(data)
        }</select>
    );

};
