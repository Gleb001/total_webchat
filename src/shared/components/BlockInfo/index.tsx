// imports ================================================== //
import type { BlockInfo } from "./types/index";
import styles from "./ui/index.module.css";

// main ===================================================== //
const BlockInfo: BlockInfo = ({ children }) => {

    return (
        <div className={styles.block_info}>
            {children}
        </div>
    );

};

// exports ================================================== //
export default BlockInfo;