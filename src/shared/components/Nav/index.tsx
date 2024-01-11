// imports ================================================== //
import NavContainer from "./components/NavContainer";
import type { Nav } from "./types/index";
import styles from "./ui/index.module.css";

// main ===================================================== //
const Nav: Nav = ({ children }) => {

    return (
        <NavContainer>
            <nav className={styles.nav}>
                {children}
            </nav>
        </ NavContainer>
    );

};

// exports ================================================== //
export default Nav;