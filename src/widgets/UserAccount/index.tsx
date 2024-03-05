"use client";

// imports ================================================== //
import ContainerModalWindows from "@/features/ActiveWindows";
import UserNav from "@/features/UserNav";
import styles_nav_button from "@/features/UserNav/components/UserNavButton/ui/index.module.css";
import { CSSProperties, useRef, useState } from "react";
import type { UserAccount } from "./types/index";
import styles from "./ui/index.module.css";
import getAnimationBackMove from "./components/SpecialBall/constants/animations";
import { useAppDispatch, useAppSelector } from "@/shared/libs/store/hooks";
import { setByIndex as SetActiveWindowByIndex } from "@/shared/libs/store/slices/ModalWindowsSlice/index";
import onMouse from "@/shared/libs/onMouse";
import type { NameModalWindow } from "@/shared/libs/store/slices/ModalWindowsSlice/index";
import SpecailBall from "./components/SpecialBall";
import animationBlur from "@/features/UserNav/components/UserNavButton/helpers/animationBlur";

// main ===================================================== //
const UserAccount: UserAccount = () => {

    // redux
    const dispatch = useAppDispatch();
    const active_windows = useAppSelector((state) => state.modalWindow.active_windows);

    // refs on html elements
    let NavButtonRef = useRef<HTMLButtonElement | null>(null);
    let ContainerModalWindowsRef = useRef<HTMLDivElement | null>(null);
    let SpecialBallRef = useRef<HTMLSpanElement | null>(null);

    // states
    let [hasSpecialBall, setHasSpecialBall] = useState(false);
    let [isMouseDown, setIsMouseDown] = useState(false);
    let [styleSpecialBall, setStyleSpecialBall] = useState<CSSProperties>({});
    let [indexNewModalWindow, setIndexNewModalWindow] = useState<number>(0);

    // drag and drop functional
    function handleMouseDown(event: React.MouseEvent<HTMLDivElement>) {

        const target = event.target as HTMLElement;
        const isNavButton = target.classList.contains(styles_nav_button.user_nav_button);
        const isActiveNavButton = !target.classList.contains(styles_nav_button.is_active);

        if (isNavButton && isActiveNavButton) {
            NavButtonRef.current = target as HTMLButtonElement;
            NavButtonRef.current.classList.add(styles_nav_button.is_active);
            setIsMouseDown(true);
        }

    }
    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {

        // mouse on
        const mouseOnContainerModalWindow = onMouse(
            ContainerModalWindowsRef.current,
            [event.clientX, event.clientY]
        );
        const mouseOnCurrentNavButton = onMouse(
            NavButtonRef.current,
            [event.clientX, event.clientY]
        );

        if (!isMouseDown || mouseOnCurrentNavButton) return;
        if (!hasSpecialBall) return setHasSpecialBall(true);

        if (mouseOnContainerModalWindow && active_windows.length < 2) {

            const total_width = ContainerModalWindowsRef.current!.offsetWidth / (active_windows.length + 1);
            const currentXPos = (event.clientX - ContainerModalWindowsRef.current!.offsetLeft);
            const indexCurrentBlock = Math.floor(currentXPos / total_width);
            setIndexNewModalWindow(indexCurrentBlock);

            setStyleSpecialBall({
                height: ContainerModalWindowsRef.current!.offsetHeight,
                width: total_width,
                left: ContainerModalWindowsRef.current!.offsetLeft + (indexCurrentBlock * total_width),
                top: ContainerModalWindowsRef.current!.offsetTop,
                borderRadius: 15
            });

        } else {

            const center_pos = SpecialBallRef.current!.offsetWidth / 2;

            setStyleSpecialBall({
                height: 15,
                width: 15,
                left: event.pageX - center_pos,
                top: event.pageY - center_pos,
                borderRadius: "50%"
            });

        }

    }
    function handleMouseUp(event: React.MouseEvent<HTMLDivElement>) {

        const mouseOnContainerModalWindow = onMouse(
            ContainerModalWindowsRef.current!,
            [event.clientX, event.clientY]
        );
        const mouseOnCurrentNavButton = onMouse(
            NavButtonRef.current!,
            [event.clientX, event.clientY]
        );

        if (isMouseDown) setIsMouseDown(false);
        if (!isMouseDown || mouseOnCurrentNavButton) return;

        if (mouseOnContainerModalWindow && active_windows.length < 2) {

            const current_title = NavButtonRef.current!.dataset.title as NameModalWindow;

            if (!active_windows.includes(current_title)) {
                dispatch(
                    // @ts-ignore
                    SetActiveWindowByIndex({
                        title: current_title,
                        index: indexNewModalWindow
                    })
                );
            }

            setHasSpecialBall(false);

        } else {

            let animationBackMove = getAnimationBackMove(
                SpecialBallRef.current!,
                NavButtonRef.current!
            );

            animationBackMove
                .then(() => {
                    setHasSpecialBall(false);
                })
                .then(async () => {
                    await animationBlur(
                        NavButtonRef.current!,
                        "500ms linear forwards reverse"
                    );
                })
                .then(() => {
                    NavButtonRef.current!.classList.remove(styles_nav_button.is_active);
                    NavButtonRef.current = null;
                });

        }


    }

    return (
        <div
            className={styles.user_account}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <UserNav />
            <ContainerModalWindows ref={ContainerModalWindowsRef} />
            {hasSpecialBall && <SpecailBall style={styleSpecialBall} ref={SpecialBallRef} />}
        </div>
    );

};

// exports ================================================== //
export default UserAccount;