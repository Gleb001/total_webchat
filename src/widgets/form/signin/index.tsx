"use client";

// imports ================================================== //
import type { FormSignIn as FormSignInType, EventSubmit } from "./types/index";
import { useRouter } from "next/navigation";
import { Form, InputForm } from "@/shared/components/Form";
import { InputPassword } from "@/shared/components/Form/components/buttonShowPassword";
import { signinUser } from "./api/signinUser";
import { useAppDispatch } from "@/shared/libs/store/hooks";
import { set as setUser } from "@/shared/libs/store/slices/UserSlice";

// main ===================================================== //
export const FormSignIn: FormSignInType = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();

    async function handleSubmit(event: EventSubmit) {

        event.preventDefault();

        const EmailRef = event.target.email;
        const email = EmailRef.value;

        const PasswordRef = event.target.password;
        const password = PasswordRef.value;

        const PasswordConfirmRef = event.target.password_confirm;
        const passwordConfirm = PasswordConfirmRef.value;

        if (password != passwordConfirm) {
            PasswordConfirmRef.setCustomValidity("Пароли не совпадают!");
        } else {
            let { isLogin, userId } = await signinUser(email, password);
            if (isLogin) {
                router.push("login");
            } else {
                dispatch(setUser({ id: userId, email }));
                router.push(`/user/${userId}`);
            }
        }

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
            <InputPassword
                name="password"
                title="Пароль"
                placeholder="Введите пароль к будущему аккаунту"
                required
            />
            <InputPassword
                name="password_confirm"
                title="Подтверждение пароля"
                placeholder="Введите выше набранный пароль для подтверждения"
                required
            />
            <input type="submit" value="Создать аккаунт" />
        </Form>
    );

};
