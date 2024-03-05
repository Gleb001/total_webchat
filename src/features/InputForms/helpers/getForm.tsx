// imports ================================================== //
import { DataForm } from "@/entities/formContainer/types";
import FORMS from "../constants/forms";

// types ==================================================== //
type getForm = (isSignin: boolean) => DataForm

// main ===================================================== //
const getForm: getForm = (isSignin) => {
    if (isSignin) {
        return FORMS.signin;
    } else {
        return FORMS.login;
    }
}

// exports ================================================= //
export default getForm;