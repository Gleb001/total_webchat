// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
// event submit arguments ----------------------------------- //
interface EventSubmitTarget {
    email: HTMLInputElement,
    password: HTMLInputElement,
    password_confirm: HTMLInputElement
}
type EventSubmit = (
    FormEvent<HTMLFormElement> &
    EventSubmitTarget
)

// react component ------------------------------------------ //
type SigninForm = FC<>

// exports ================================================== //
export type { SigninForm, EventSubmit };