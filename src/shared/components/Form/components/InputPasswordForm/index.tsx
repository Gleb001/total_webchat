"use client";

// imports ================================================== //
import { useState } from "react";
import styles from "./ui/index.module.css";
import { DATA } from "./constants/text";
import InputForm from "../InputForm";
import type { MouseEvent } from "react";
import Image from "next/image";

// main ===================================================== //
const InputPasswordForm: typeof InputForm = (props) => {

    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const { typeInput, textButton, svgPicture } = DATA.get(isVisiblePassword)!;

    function handleClickButton(event: MouseEvent<HTMLInputElement>) {
        event.preventDefault();
        setIsVisiblePassword(!isVisiblePassword);
    }

    return (
        <InputForm
            type={typeInput}
            {...props}
        >
            <div
                onClick={handleClickButton}
                className={styles.button_show_password}
            >
                <Image
                    src={svgPicture}
                    alt={textButton}
                />
            </div>
        </InputForm>
    );

};

// exports ================================================== //
export default InputPasswordForm;