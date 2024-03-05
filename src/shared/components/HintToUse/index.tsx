// imports ================================================== //
import type { HintToUse } from "./types/index";
import styles from "./ui/index.module.css";

// main ===================================================== //
const HintToUse: HintToUse = ({ info, children }) => {

    return (
        <div className={styles.hint}>
            <div className={styles.hint_video}>
                {children}
            </div>
            <div className={styles.hint_info}>
                <p>
                    <b>Подсказка</b>
                </p>
                <p>
                    {info}
                </p>
            </div>
        </div>
    );

};

// exports ================================================== //
export default HintToUse;
