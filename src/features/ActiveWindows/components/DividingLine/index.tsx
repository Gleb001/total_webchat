// imports ================================================== //
import type { DividingLine } from "./types/index";
import styles from "./ui/index.module.css";
import { useState } from "react";

// main ===================================================== //
const DividingLine: DividingLine = () => {

    return (
        <div className={styles.dividing_line} >
            |
        </div>
    );

};

// exports ================================================== //
export default DividingLine;