// imports ================================================== //
import type { NavContainer } from "./types";
import styles from "./ui/index.module.css";

// main ===================================================== //
const NavContainer: NavContainer = ({ children }) => {

    return (
        <div className={styles.container_nav}>
            {children}
        </div>
    );

};

// exports ================================================== //
export default NavContainer