// imports ================================================== //
import { useAppDispatch } from "@/shared/libs/store/hooks";
import type { ModalWindow } from "./types/index";
import styles from "./ui/index.module.css";
import { remove as removeActiveWindow } from "@/shared/libs/store/slices/ModalWindowsSlice";

// main ===================================================== //
const ModalWindow: ModalWindow = ({ title, children }) => {

    const dispatch = useAppDispatch();

    function handleClickButtonClose() {
        dispatch(
            removeActiveWindow(title)
        );
    }

    return (
        <div className={styles.modal_window}>
            <header>
                <div className={styles.info}>
                    {/* <div className={styles.nav_buttons}>
                        <button>←</button>
                        <button>→</button>
                    </div> */}
                    <span className={styles.title}>
                        {title}
                    </span>
                </div>
                <div>
                    <button onClick={handleClickButtonClose}>
                        ✕
                    </button>
                </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    );

};

// exports ================================================== //
export default ModalWindow;