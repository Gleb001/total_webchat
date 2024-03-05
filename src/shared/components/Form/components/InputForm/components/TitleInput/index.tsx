// imports ================================================== //
import type { TitleInput } from "./types/index";
import styles from "./ui/index.module.css";

// main ===================================================== //
const TitleInput: TitleInput = ({ title }) => {

    return (
        <span className={styles.title_input}>
            {title}
        </span>
    );

};

// exports ================================================== //
export default TitleInput;