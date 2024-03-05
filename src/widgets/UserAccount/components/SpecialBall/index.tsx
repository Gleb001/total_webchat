// imports ================================================== //
import { forwardRef, useRef } from "react";
import { Props } from "./types";
import styles from "./ui/index.module.css";
import animationMoveCircle from "./constants/animations";

// main ===================================================== //
const SpecailBall = forwardRef<HTMLSpanElement, Props>(({ style }, ref) => {

    return (
        <span
            ref={ref}
            style={style}
            className={styles.special_ball}
        ></span>
    );

});

// exports ================================================== //
export default SpecailBall;