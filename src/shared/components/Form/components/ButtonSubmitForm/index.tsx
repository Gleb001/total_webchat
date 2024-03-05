// imports ================================================== //
import type { ButtonSubmitForm } from "./types/index";
import styles from "./ui/index.module.css";
import Loading from "@/entities/loading";

// main ===================================================== //
const ButtonSubmitForm: ButtonSubmitForm = ({ isWait, children }) => {

    const additionalClassName = (
        isWait ? 
            styles.wait_button_submit : 
            styles.button_submit
    );

    return (
        <button className={`${styles.button} ${additionalClassName}`} type="submit">
            {children}
            {isWait && <Loading />}
        </button>
    );

};

// exports ================================================== //
export default ButtonSubmitForm;