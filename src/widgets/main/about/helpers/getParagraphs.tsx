// imports ================================================== //
import styles from "../ui/index.module.css";

// types ==================================================== //
type getParagraphs = (text?: string) => React.ReactNode;

// main ===================================================== //
export const getParagraphs: getParagraphs = (text) => {
    if (text && text.length > 0) {
        
        let paragraphs = text.split(/\n/g);
        return (
            paragraphs.map((text) => (
                text.length > 0 && <p className={styles.text_about_us}>{ text }</p>
            ))
        );

    }
}