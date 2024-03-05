// imports ================================================== //
import InputForms from "@/features/InputForms";
import styles from "./ui/index.module.css";

// main ===================================================== //
const AreaInput = () => {

    return (
        <div className={styles.area_input}>
            <div className={styles.logo}>
                WebChat
                <span className="icon_message"></span>
            </div>
            <InputForms />
        </div>
    );

};

// exports ================================================== //
export default AreaInput;
