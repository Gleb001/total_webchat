// imports ================================================== //
import type { Nav } from "./types/index";
import styles from "./ui/index.module.css";

// main ===================================================== //
const Nav: Nav = ({ children }) => {

    return (
        <nav className={styles.nav}>
            {children}
        </nav>
    );

};

// exports ================================================== //
export default Nav;