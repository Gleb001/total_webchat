"use client";

// imports ================================================== //
import { useAppSelector } from "@/shared/libs/store/hooks";
import { MODAL_WINDOWS } from "./constants/ModalWindows";
import type { Props } from "./types/index";
import styles from "./ui/index.module.css";
import DividingLine from "./components/DividingLine";
import { forwardRef, useRef, Fragment, useEffect } from "react";
import styles_dividing_line from "./components/DividingLine/ui/index.module.css";
import styles_modal_window from "./components/ModalWindow/ui/index.module.css";

// main ===================================================== //
const ContainerModalWindows = forwardRef<HTMLDivElement, Props>((props, ref) => {

    const active_modal_windows = useAppSelector((state) => state.modalWindow.active_windows);
    const DividingLineRef = useRef<HTMLDivElement>();
    const ContainerModalWindowsRef = ref as { current: HTMLDivElement | null };

    function handleMouseDown(event: React.MouseEvent<HTMLDivElement>) {

        event.preventDefault();

        const target = event.target as HTMLDivElement;
        const isDividingLine = target.classList.contains(styles_dividing_line.dividing_line);
        if (isDividingLine) DividingLineRef.current = target;

    }
    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {

        event.preventDefault();

        if (!DividingLineRef.current) return;

        const DividingLine = DividingLineRef.current!;
        const LeftModalWindow = DividingLine.previousElementSibling as HTMLDivElement;
        const RightModalWindow = DividingLine.nextElementSibling as HTMLDivElement;
        const ParentElement = DividingLine.parentElement as HTMLDivElement;

        const { clientX } = event;

        const left_width = clientX - (ParentElement.offsetLeft - (DividingLine.offsetWidth / 2));
        const right_width = ParentElement.offsetWidth - (left_width + (DividingLine.offsetWidth / 2));

        LeftModalWindow.style.flex = `0 1 ${left_width}px`;
        RightModalWindow.style.flex = `0 1 ${right_width}px`;

    }
    function handleMouseUp(event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault();
        if (DividingLineRef.current) DividingLineRef.current = undefined;
    }

    useEffect(() => {

        if (active_modal_windows.length > 0) {
            if (ContainerModalWindowsRef.current) {
                const ModalWindows = ContainerModalWindowsRef.current.querySelectorAll<HTMLDivElement>("." + styles_modal_window.modal_window);
                for (let ModalWindow of ModalWindows) {
                    ModalWindow.style.flex = "0 1 auto";
                }
            }
        }

    }, [active_modal_windows]);

    return (
        <div
            ref={ref}
            className={styles.modal_windows}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            {
                active_modal_windows.length ?
                    active_modal_windows.map(
                        (name_modal_window, index) => {
                            let Item = MODAL_WINDOWS[name_modal_window];
                            return (
                                <Fragment key={name_modal_window} >
                                    {index > 0 && <DividingLine />}
                                    {<Item />}
                                </Fragment>
                            );
                        }
                    ) :
                    <span key="logo">WebChat Logo</span>
            }
        </div>
    );

});

// exports ================================================== //
export default ContainerModalWindows;