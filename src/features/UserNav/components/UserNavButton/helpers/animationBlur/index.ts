// imports ================================================== //
import "./index.css";

// types ==================================================== //
type animationBlur = <T extends HTMLElement>(targetElement: T, settings: string) => Promise<T>

// main ===================================================== //
const animationBlur: animationBlur = async (targetElement, settings) => {

    // start animation blur
    targetElement.style.animation = `animation_blur ${settings}`;

    return new Promise((resolve) => {
        setTimeout(() => {
            // end animation blur
            targetElement.style.animation = "";
            resolve(targetElement);
        }, 500);
    });

}

// exports ================================================= //
export default animationBlur;