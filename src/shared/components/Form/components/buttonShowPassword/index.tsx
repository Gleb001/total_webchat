"use client";

// imports ================================================== //
import { useState } from "react";
import type { InputPassword as InputPasswordType } from "./types/index";
import styles from "./ui/index.module.css";
import { DATA } from "./constants/text";
import { InputForm } from "../input";
import type { FocusEvent, MouseEvent } from "react";
import { INPUT_PATTERNS } from "../..";
import Image from "next/image";

// main ===================================================== //
export const InputPassword: InputPasswordType = (props) => {

    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const { typeInput, textButton, svgPicture } = DATA.get(isVisiblePassword)!;

    function handleClickButton(event: MouseEvent<HTMLInputElement>) {
        event.preventDefault();
        setIsVisiblePassword(!isVisiblePassword);
    }
    // function handleBlur(event: FocusEvent<HTMLInputElement>) {
    //     const PasswordRef = event.target;
    //     const password_regexp = INPUT_PATTERNS.password();
    //     if (!password_regexp.test(PasswordRef.value)) {
    //         PasswordRef.setCustomValidity("Пароль должен содержать цифры, буквы в верхнем и нижнем регистре, а также специальные символы!");
    //     }
    // }

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