// imports ================================================== //
import type { InputForm as InputFormType } from "./types/index";
import styles from "./ui/index.module.css";
import type { MouseEvent, FocusEvent } from "react";

// main ===================================================== //
export const InputForm: InputFormType = ({ title, children, ...props  }) => {

    function handleClick(event: MouseEvent<HTMLElement>) {
        
        const LabelRef = event.currentTarget;
        const InputFormRef = LabelRef.querySelector("." + styles.input_form);
        const target = event.target;

        if (InputFormRef === target || LabelRef === target) {
            event.currentTarget.classList.add(styles.is_active);
        }

    }
    function handleBlur(event: FocusEvent<HTMLLabelElement>) {
        event.currentTarget.classList.remove(styles.is_active);
    }

    return (
        <label
            onClick={handleClick}
            onBlur={handleBlur}
            className={styles.container_input}
        >
            <span className={styles.title_input}>{title}</span>
            <input className={styles.input_form} {...props} />
            {children}
        </label>
    );

};
