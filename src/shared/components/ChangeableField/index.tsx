"use client";


// imports ================================================== //
import type { ChangeableField } from "./types/index";
import type { MouseEvent } from "react";
import styles from "./ui/index.module.css";
import { useState } from "react";
import { Button } from "../Button";
import Field from "./components/Field";

// main ===================================================== //
const ChangeableField: ChangeableField = ({ ...props }) => {

    let [isActive, setIsActive] = useState(false);

    function handleClickOnField() {
    }
    function handleFocus() {
        setIsActive(true);
    }
    function handleBlur() {
        setIsActive(false);
    }

    function handleClickOnButton(event: MouseEvent<HTMLButtonElement>) {
        
    }

    return (
        <div className={styles.container_changeableField}>
            <Field onClick={handleClickOnField} {...props} />
            {isActive && <Button onClick={handleClickOnButton}>Изменить</Button>}
        </div>
    );

};

// exports ================================================== //
export default ChangeableField;
