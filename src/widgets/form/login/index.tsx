"use client";

// imports ================================================== //
import { useRouter } from "next/navigation";
import type { FormLogIn as FormLogInType, EventSubmit } from "./types/index";
import { Form, InputForm } from "@/shared/components/Form";
import { InputPassword } from "@/shared/components/Form/components/buttonShowPassword";
import { loginUser } from "./api/loginUser";
import { useAppDispatch } from "@/shared/libs/store/hooks";
import { set as setUser } from "@/shared/libs/store/slices/UserSlice";

// main ===================================================== //
export const FormLogIn: FormLogInType = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();

    async function handleSubmit(event: EventSubmit) {

        event.preventDefault();

        const inputEmailRef = event.target.email;
        const email = inputEmailRef.value;

        const inputPasswordRef = event.target.password;
        const password = inputPasswordRef.value;

        const { userId } = await loginUser(email, password);
        if (userId) {
            dispatch(setUser({ id: userId, email }));
            router.push(`/user/${userId}`);
        } else {
            inputPasswordRef.value = "";
        }

    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputForm
                type="email"
                name="email"
                title="Электронная почта"
                placeholder="Введите адрес электронной почты, привязанной к аккаунту"
                required
            />
            <InputPassword
                name="password"
                title="Пароль"
                placeholder="Введите пароль от аккаунта"
                required
            />
            <input type="submit" value="Войти в аккаунт" />
        </Form>
    );

};
