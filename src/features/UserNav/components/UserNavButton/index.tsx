"use client";

// imports ================================================== //
import { useAppDispatch, useAppSelector } from "@/shared/libs/store/hooks";
import type { UserNavButton } from "./types/index";
import styles from "./ui/index.module.css";
import { setTotal as SetActiveWindow } from "@/shared/libs/store/slices/ModalWindowsSlice/index";

// main ===================================================== //
const UserNavButton: UserNavButton = ({ title, icon_className }) => {

    const dispatch = useAppDispatch();
    const active_windows = useAppSelector((state) => state.modalWindow.active_windows);
    
    const isActive = active_windows.includes(title);
    const activeClass = (isActive && styles.is_active);

    function handleMouseUp() {
        if (!isActive) {
            dispatch(
                SetActiveWindow(title)
            );
        }
    }

    return (
        <button
            data-title={title}
            onMouseUp={handleMouseUp}
            className={styles.user_nav_button + " " + activeClass}
        >
            {icon_className && <p className={icon_className}></p>}
            {title}
        </button>
    );

};

// exports ================================================== //
export default UserNavButton;