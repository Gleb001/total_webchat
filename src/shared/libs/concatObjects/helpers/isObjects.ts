// imports ================================================== //
import { getType } from "../../getType";

// main ===================================================== //
export function isObjects (...objects: object[]) {
    for (let object of objects) {
        if (getType(object) !== "object") {
            return false;
        }
    }
    return true;
}