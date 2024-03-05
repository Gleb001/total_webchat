// import =================================================== //
import UserNavButton from "./components/UserNavButton";
import type { UserNav } from "./types";
import styles from "./ui/index.module.css";

// main ===================================================== //
const UserNav: UserNav = () => {

    return (
        <div className={styles.nav_container}>
            <nav className={styles.nav}>
                <div className={styles.container_main_links}>
                    <UserNavButton title="Аккаунт" />
                    <div className={styles.block_links}>
                        <UserNavButton title="Чаты" />
                        <UserNavButton title="Статьи" />
                        <UserNavButton title="Заметки" />
                        <UserNavButton title="Друзья" />
                        <UserNavButton title="Настройки" />
                    </div>
                </div>
                <div className={styles.container_logo_link}>
                    <UserNavButton title="WebChat" />
                </div>
            </nav>
        </div>
    );
    
}

// exports ================================================== //
export default UserNav;