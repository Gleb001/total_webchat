// imports ================================================== //
import type { UserHintElement as UserHintElementType } from "./types/index";
import styles from "./ui/index.module.css";
import type { MouseEvent } from "react";

// main ===================================================== //
export const UserHintElement: UserHintElementType = ({ children }) => {

    function handleMouseOver(event: MouseEvent<HTMLDivElement>) {

    }

    function handleMouseOut(event: MouseEvent<HTMLDivElement>) {

    }

    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {children}
        </div>
    );

};
