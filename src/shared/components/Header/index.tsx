// imports ================================================== //
import styles from "./ui/index.module.css";
import type { Header as HeaderType } from "./types/index";

// main ===================================================== //
export const Header: HeaderType = ({ title, children }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{ title }</h1>
            <div className={styles.button_container}>{ children }</div>
        </header>
    );
};
