// imports ================================================== //
import type { Loading } from "./types/index";
import styles from "./ui/index.module.css";

// main ===================================================== //
const Loading: Loading = () => {

    return (
        <span className={styles.loading}></span>
    );

};

// exports ================================================== //
export default Loading;

