// imports ================================================== //
import type { Status } from "../types";
import styles from "../ui/index.module.css";

// types ==================================================== //
type getClassNameLabel = (status: Status) => string

// main ===================================================== //
const getClassNameLabel: getClassNameLabel = (status) => {
    let className = styles.label;
    if (status !== "none") className += ` ${styles[status]}`;
    return className;
}

// exports ================================================= //
export default getClassNameLabel;