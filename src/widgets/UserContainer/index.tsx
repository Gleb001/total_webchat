// imports ================================================== //
import type { UserContainer } from "./types/index";
import styles from "./ui/index.module.css";
import UserAccountNav from "@/features/UserNav";

// main ===================================================== //
const UserContainer: UserContainer = ({ children }) => {

    return (
        <div className={styles.user_container}>
            {children}
        </div>

    );

};

// exports ================================================== //
export default UserContainer;