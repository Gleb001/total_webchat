// imports ================================================== //
import { Form } from "./types";
import styles from "./ui/index.module.css";
import { concatObjects } from "@/shared/libs/concatObjects";

// main ===================================================== //
const Form: Form = ({ children, ...props }) => {

    let additional_props = {
        className: styles.form
    };

    return (
        <form {...concatObjects(props, additional_props)}>
            {children}
        </form>
    );

}

// exports ================================================== //
export default Form;