// imports ================================================== //
import type { FC } from "react";

// main ===================================================== //
// event submit arguments ----------------------------------- //
interface EventSubmitTarget {
    email: HTMLInputElement,
    password: HTMLInputElement
}
type EventSubmit = (
    FormEvent<HTMLFormElement> &
    EventSubmitTarget
)

// react component ------------------------------------------ //
type FormLogIn = FC<>

// exports ================================================== //
export type { FormLogIn, EventSubmit };