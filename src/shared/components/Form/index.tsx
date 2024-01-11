// imports ================================================== //
import { InputForm } from "./components/input";
import { Form as FormType } from "./types";
import styles from "./ui/index.module.css";
import { concatObjects } from "@/shared/libs/concatObjects";
import { INPUT_PATTERNS } from "./constants/input_patterns";

// main ===================================================== //
const Form: FormType = ({ children, ...props }) => {

    let additional_props = {
        className: styles.form
    };

    return (
        <form {...concatObjects(props, additional_props)}>{
            children
        }</form>
    );

}

// exports ================================================== //
export { Form, InputForm, INPUT_PATTERNS };