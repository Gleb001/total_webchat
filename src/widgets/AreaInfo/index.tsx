// imports ================================================== //
import AboutProject from "@/features/AboutProject";
import type { AreaInfo } from "./types/index";
import styles from "./ui/index.module.css";

// main ===================================================== //
const AreaInfo: AreaInfo = () => {

    return (
        <div className={styles.area_info}>
            <AboutProject />
        </div>
    );

};

// exports ================================================== //
export default AreaInfo;
