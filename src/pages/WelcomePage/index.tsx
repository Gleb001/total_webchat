// imports ================================================== //
import AreaInfo from "@/widgets/AreaInfo";
import AreaInput from "@/widgets/AreaInput";
import styles from "./ui/index.module.css";
import "./ui/index.css";

// main ===================================================== //
const WelcomePage = () => (
    <div className={styles.input_page}>
        <AreaInput />
        <AreaInfo />
    </div>
);

// exports ================================================== //
export default WelcomePage;
