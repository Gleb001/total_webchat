"use client";

// imports ================================================== //
import type { Field } from "./types/index";
import styles from "./ui/index.module.css";
import type { ChangeEvent } from "react";
import { useState } from "react";

// main ===================================================== //
const Field: Field = ({ type, current_value, update, ...props }) => {

    let [value, setValue] = useState(current_value);
    let [new_value, setNewValue] = useState();

    function handleChange(event: ChangeEvent<typeof type extends "input" ? HTMLInputElement : HTMLTextAreaElement>) {
        setValue(current_value);
    }

    return (
        type === "input" ?
            <input    value={value} onChange={handleChange} {...props} /> :
            <textarea value={value} onChange={handleChange} {...props} />
    )

};

// exports ================================================== //
export default Field;
