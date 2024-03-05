"use client";

// imports ================================================== //
import { useRouter } from "next/navigation";
import type { LoginForm, EventSubmit } from "./types/index";
import Form from "@/shared/components/Form";
import { loginUser } from "./api/loginUser";
import { useAppDispatch } from "@/shared/libs/store/hooks";
import { set as setUser } from "@/shared/libs/store/slices/UserSlice";
import InputForm from "@/shared/components/Form/components/InputForm";
import InputPasswordForm from "@/shared/components/Form/components/InputPasswordForm";
import { useState } from "react";
import ButtonSubmitForm from "@/shared/components/Form/components/ButtonSubmitForm";
import VALIDATIONS from "@/shared/constants/validationInputForm/validation";

// main ===================================================== //
const LoginForm: LoginForm = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();
    let [isWait, setIsWait] = useState(false);

    async function handleSubmit(event: EventSubmit) {

        event.preventDefault();

        if (isWait) return;

        setIsWait(true);

        const EmailRef = event.target.email;
        const PasswordRef = event.target.password;

        const isValidInputs = (
            EmailRef.checkValidity() &&
            PasswordRef.checkValidity()
        );

        if (isValidInputs) {
            const email = EmailRef.value;
            const password = PasswordRef.value;
            const { userId } = await loginUser(email, password);
            if (userId) {
                dispatch(setUser({ id: userId }));
                router.push(`/user/${userId}`);
            } else {
                PasswordRef.value = "";
            }
        }

        setIsWait(false);

    }

    return (
        <Form onSubmit={handleSubmit} >
            <InputForm
                type="email"
                name="email"
                title="Электронная почта"
                placeholder="Введите адрес электронной почты, привязанной к аккаунту"
                required
            />
            <InputPasswordForm
                name="password"
                title="Пароль"
                pattern={VALIDATIONS.password.pattern}
                hint={VALIDATIONS.password.message}
                placeholder="Введите пароль от аккаунта"
                required
            />
            <ButtonSubmitForm isWait={isWait}>
                Войти в аккаунт
            </ButtonSubmitForm>
        </Form>
    );

};

// exports ================================================== //
export default LoginForm;