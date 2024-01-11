// imports ================================================== //
import { concatObjects } from "@/shared/libs/concatObjects";
import type { Button as ButtonType } from "./types/index";
import styles from "@/shared/ui/components/button.module.css";

// main ===================================================== //
export const Button: ButtonType = ({ children, ...props }) => {

    let additional_props = {
        className: styles.button
    };

    return (
        <button {...concatObjects(props, additional_props)}>{ children }</button>
    );

};
