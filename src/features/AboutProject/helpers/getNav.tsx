// imports ================================================== //
import ITEMS from "../constants/items";
import type { MouseEventHandler } from "react";
import styles from "../ui/index.module.css";

// types ==================================================== //
type getNav = (
    data: typeof ITEMS,
    acitveIndex: number,
    handleClickOnItem: MouseEventHandler
) => JSX.Element[]

// main ===================================================== //
const getNav: getNav = (data, activeIndex, handleClickOnItem) => {
    return (
        data.map((item, index) => (
            <button
                key={item.name}
                className={index === activeIndex ? styles.active_nav_button : ""}
                data-index={index}
                onClick={handleClickOnItem}
            >
                {item.name}
            </button>
        ))
    );
}

// exports ================================================= //
export default getNav;