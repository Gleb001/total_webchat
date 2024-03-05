"use client"

// imports ================================================== //
import { useState } from "react";
import styles from "./ui/index.module.css";
import stylesButton from "@/shared/ui/components/button.module.css";
import FormContainer from "@/shared/components/Form/components/FormContainer";
import getForm from "./helpers/getForm";

// main ===================================================== //
const InputForms = () => {

    let [isSignin, setIsSignin] = useState(false);
    let currentDataForm = getForm(isSignin);

    function handleChangeForm() {
        setIsSignin(!isSignin);
    }

    return (
        <div className={styles.input_forms}>
            <FormContainer data={currentDataForm} />
            <button onClick={handleChangeForm} className={stylesButton.button + " " + styles.button_change_form}>
                {isSignin ? "Войти в аккаунт" : "Зарегистрироваться"}
            </button>
        </div>
    );

}

// exports ================================================== //
export default InputForms;