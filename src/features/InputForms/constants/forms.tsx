// imports ================================================== //
import LoginForm from "@/features/LoginForm";
import SigninForm from "@/features/SigninForm";
import type { DataForm } from "@/shared/components/Form/components/FormContainer/types";

// types ==================================================== //
type Key = "signin" | "login"
interface FORMS {
    [key: Key | string]: DataForm
}

// main ===================================================== //
const FORMS: FORMS = {
    signin: {
        name: "Регистрация",
        component: <SigninForm />
    },
    login: {
        name: "Вход в аккаунт",
        component: <LoginForm />
    }
};

// exports ================================================== //
export default FORMS;