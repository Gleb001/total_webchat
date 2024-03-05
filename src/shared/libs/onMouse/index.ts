// types ==================================================== //
type onMouse = (element: HTMLElement | null, coordinates: [number, number]) => boolean

// main ===================================================== //
const onMouse: onMouse = (element, coordinates) => {

    if (!element) return false;
     
    let [x, y] = coordinates;
    let { left, right, top, bottom} = element.getBoundingClientRect();

    let isRangeLeftToRight = (left < x && x < right);
    let isRangeTopToBottom = (top < y && y < bottom);

    return (isRangeLeftToRight && isRangeTopToBottom)

}

// exports ================================================= //
export default onMouse;