// imports ================================================== //
import IncorrectFillingHint from "./components/IncorrectFillingHint";
import type { InputForm, Status } from "./types/index";
import styles from "./ui/index.module.css";
import { useState, useMemo } from "react";
import type { MouseEvent } from "react";
import InputWithStatus from "./components/Input";
import TitleInput from "./components/TitleInput";
import getClassNameLabel from "./helpers/getClassNameLabel";

// main ===================================================== //
const InputForm: InputForm = ({ title, hint, children, ...props }) => {

    let [status, setStatus] = useState<Status>("none");
    let classNameLabel = useMemo(() => getClassNameLabel(status), [status]);

    function handleClick(event: MouseEvent<HTMLLabelElement>) {

        let LabelRef = event.currentTarget;
        let InputRef = LabelRef.querySelector("input") as HTMLInputElement;

        if (InputRef.value === "") setStatus("active");

    }

    return (
        <div className={styles.input_container}>
            <label
                onClick={handleClick}
                className={classNameLabel}
            >
                <TitleInput title={title} />
                <InputWithStatus changeStatus={setStatus} {...props} />
                {children}
            </label>
            {status === "invalid" && <IncorrectFillingHint hint={hint} />}
        </div>
    );

};

// exports ================================================== //
export default InputForm;
