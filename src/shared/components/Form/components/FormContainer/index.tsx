// imports ================================================== //
import type { FormContainer } from "./types/index";
import styles from "./ui/index.module.css";

// main ===================================================== //
const FormContainer: FormContainer = ({ data }) => {

    let { name, component } = data;

    return (
        <div className={styles.form_container}>
            <h1 className={styles.name_form}>
                {name}
            </h1>
            {component}
        </ div>
    );

};

// exports ================================================== //
export default FormContainer;
