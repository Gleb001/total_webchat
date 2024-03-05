// imports ================================================== //
import { AnimationJS } from "moveton";

// types ==================================================== //
type getAnimationBackMove = (
    targetElement: HTMLElement,
    endPointElement: HTMLElement
) => ReturnType<AnimationJS["start"]>

// main ===================================================== //
const getAnimationBackMove: getAnimationBackMove = (targetElement, endPointElement) => {

    // 1.1 get left coordinations for animation
    const start_left = targetElement.offsetLeft;
    const end_left = Math.floor(endPointElement.offsetLeft + (endPointElement.offsetWidth / 2));
    const distance_left = Math.abs(start_left - end_left);

    // 1.2 get top coordinations for animation
    const start_top = targetElement.offsetTop;
    const end_top = Math.floor(endPointElement.offsetTop + (endPointElement.offsetHeight / 2));
    const distance_top = Math.abs(start_top - end_top);

    const across_distance = Math.floor(Math.sqrt((Math.pow(distance_left, 2) + (Math.pow(distance_top, 2)))));

    // 2.1 animation move left
    const animationMoveLeft = new AnimationJS(
        [targetElement],
        { left: `${start_left} -> ${end_left}px`}
    );
    // 2.2 animation move top
    const animationMoveTop = new AnimationJS(
        [targetElement],
        { top: `${start_top} -> ${end_top}px` }
    );

    // playing animations
    animationMoveLeft.start("easeInOutQuad", across_distance);
    return animationMoveTop.start("linear", across_distance);

}

// exports ================================================= //
export default getAnimationBackMove;