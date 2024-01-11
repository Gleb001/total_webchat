// imports ================================================== //
import styles from "../ui/index.module.css";

// types ==================================================== //
type getTitle = (title?: string) => React.ReactNode

// main ===================================================== //
export const getTitle: getTitle = (title) => {
    if (title && title.length > 0) {
        return (
            <h2 className={styles.title_about_us}>{title}</h2>
        );
    }
}