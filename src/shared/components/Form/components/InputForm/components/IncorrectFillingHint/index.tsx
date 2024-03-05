// imports ================================================== //
import type { IncorrectFillingHint } from "./types/index";
import styles from "./ui/index.module.css";

// main ===================================================== //
const IncorrectFillingHint: IncorrectFillingHint = ({ hint }) => {

    const text = (hint ? hint : "Поле не верно заполнено");

    return (
        <p className={styles.incorrect_filling_hint}>
            {text}
        </p>
    );

};

// exports ================================================== //
export default IncorrectFillingHint;