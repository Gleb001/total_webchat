"use client"

// imports ================================================== //
import type { InputInfo } from "./types/index";
import styles from "./ui/index.module.css";
import ITEMS from "./constants/items";
import getNav from "./helpers/getNav";
import { useState } from "react";
import type { MouseEvent } from "react";

// main ===================================================== //
const InputInfo: InputInfo = () => {

    let [activeIndex, setActiveIndex] = useState(0);

    function handleClickNavButton(event: MouseEvent<HTMLButtonElement>) {

        const target = event.target as HTMLButtonElement;
        const new_active_index = Number(target.getAttribute("data-index")!);

        setActiveIndex(new_active_index);

    }

    return (
        <div className={styles.input_info}>
            <div className={styles.container_content}>
                {ITEMS[activeIndex] && ITEMS[activeIndex].component}
            </div>
            <nav className={styles.nav}>
                {getNav(ITEMS, activeIndex, handleClickNavButton)}
            </nav>
        </div>
    );

};

// exports ================================================== //
export default InputInfo;
