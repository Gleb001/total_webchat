// imports ================================================== //
import type { InputWithStatus } from "./types/index";
import styles from "./ui/index.module.css";
import type { ChangeEvent } from "react";

// main ===================================================== //
const InputWithStatus: InputWithStatus = ({ changeStatus, ...props }) => {

    function handleChange(event: ChangeEvent<HTMLInputElement>) {

        const InputRef = event.target;
        const valueInput = InputRef.value;

        if (valueInput !== "") changeStatus("none");

        if (InputRef.checkValidity()) {
            changeStatus("valid");
        } else {
            changeStatus("invalid");
        }

    }
    function handleBlur(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.value === "") changeStatus("none");
    }

    return (
        <input
            onBlur={handleBlur}
            onChange={handleChange}
            className={styles.input_with_status}
            {...props}
        />
    );

};

// exports ================================================== //
export default InputWithStatus;