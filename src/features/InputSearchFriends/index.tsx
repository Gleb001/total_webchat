"use client";

// imports ================================================== //
import type { ChangeEvent } from "react";
import { useState } from "react";
import styles from "./ui/index.module.css";
import "@/shared/ui/icons/icon_2/index.css";

// main ===================================================== //
const SearchFriends = () => {

    let [value, setValue] = useState<string>();

    function handleClick() {
        // прячем список текущих друзей!!!
        // показываем результаты поиска
        console.log(value);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        setValue(event.target.value);
    }

    return (
        <div className={styles.search_friends}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Поиск друзей"
                className={styles.input_search}
            />
            <button onClick={handleClick} className={styles.button_search}>
                Поиск
            </button>
        </div>
    );

};

// exports ================================================== //
export default SearchFriends;
