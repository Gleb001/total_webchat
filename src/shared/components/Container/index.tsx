// imports ================================================== //
import styles from "./ui/index.module.css";
import type { ContainerType } from "./types/index";

// main ===================================================== //
export const Container: ContainerType = ({ children }) => {
    return (
        <div className={styles.container}>{children}</div>
    );
};
