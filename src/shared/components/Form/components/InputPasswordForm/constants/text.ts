// imports ================================================== //
import closeEye from "@/shared/ui/icons/images/eyes/close_eye.svg";
import openEye from "@/shared/ui/icons/images/eyes/open_eye.svg";

// main ===================================================== //
export const DATA = new Map([
    [
        true,
        {
            textButton: "Спрятать пароль",
            svgPicture: openEye,
            typeInput: "text"     
        }
    ],
    [
        false,
        {
            textButton: "Показать пароль",
            svgPicture: closeEye,
            typeInput: "password"
        }
    ]
]);