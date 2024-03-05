// imports ================================================== //
import styles from "./ui/index.module.css";
import type { ContainerType } from "./types/index";

// main ===================================================== //
const Container: ContainerType = ({ children }) => {
    return (
        <div className={styles.container}>{children}</div>
    );
};

// exports ================================================== //
export default Container;
