"use client";

// imports ================================================== //
import type { SigninForm, EventSubmit } from "./types/index";
import { useRouter } from "next/navigation";
import Form from "@/shared/components/Form";
import InputForm from "@/shared/components/Form/components/InputForm";
import InputPasswordForm from "@/shared/components/Form/components/InputPasswordForm";
import { signinUser } from "./api/signinUser";
import { useAppDispatch } from "@/shared/libs/store/hooks";
import { set as setUser } from "@/shared/libs/store/slices/UserSlice";
import { ChangeEvent, useState } from "react";
import ButtonSubmitForm from "@/shared/components/Form/components/ButtonSubmitForm";
import VALIDATIONS from "@/shared/constants/validationInputForm/validation";

// main ===================================================== //
const SigninForm: SigninForm = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();
    let [isWait, setIsWait] = useState(false);
    let [valuePassword, setValuePassword] = useState("");
    let { password } = VALIDATIONS;
    let passwordConfirm: typeof VALIDATIONS["password"] = {
        pattern: (
            valuePassword
        ),
        message: (
            "Пароли не совпадают!"
        )
    }

    async function handleSubmit(event: EventSubmit) {

        event.preventDefault();

        if (isWait) return;

        setIsWait(true);

        const EmailRef = event.target.email;
        const PasswordRef = event.target.password;
        const PasswordConfirmRef = event.target.password_confirm;

        const isValidInputs = (
            EmailRef.checkValidity()            && 
            PasswordRef.checkValidity()         &&
            PasswordConfirmRef.checkValidity()
        );

        if (isValidInputs) {
            const email = EmailRef.value;
            const password = PasswordRef.value;
            let { isLogin, userId } = await signinUser(email, password);
            if (isLogin) {
                router.push("login");
            } else if (userId) {
                dispatch(setUser({ id: userId }));
                router.push(`/user/${userId}`);
            }
        }

        setIsWait(false);

    }

    function handleBlur(event: ChangeEvent<HTMLInputElement>) {
        setValuePassword(event.target.value);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputForm
                type="email"
                name="email"
                title="Электронная почта"
                placeholder="Введите адрес электронной почты, к которой будет привязан аккаунт"
                required
            />
            <InputPasswordForm
                name="password"
                title="Пароль"
                onBlur={handleBlur}
                pattern={password.pattern}
                hint={password.message}
                placeholder="Введите пароль к будущему аккаунту"
                required
            />
            <InputPasswordForm
                name="password_confirm"
                title="Подтверждение пароля"
                pattern={passwordConfirm.pattern}
                hint={passwordConfirm.message}
                placeholder="Введите выше набранный пароль для подтверждения"
                required
            />
            <ButtonSubmitForm isWait={isWait}>
                Создать аккаунт
            </ButtonSubmitForm>
        </Form>
    );

};

// exports ================================================== //
export default SigninForm;