// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
interface DataForm {
    name: string,
    component: JSX.Element,
}
interface Props {
    data: DataForm
};
type FormContainer = FC<Props>

// exports ================================================== //
export type { DataForm, FormContainer };