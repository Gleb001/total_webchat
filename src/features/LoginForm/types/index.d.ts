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
interface Props {}
type LoginForm = FC<Props>

// exports ================================================== //
export type { LoginForm, EventSubmit };