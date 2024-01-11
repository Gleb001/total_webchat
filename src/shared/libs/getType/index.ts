// import =================================================== //
import type { getType as getTypeType } from "./types"

// main ===================================================== //
export const getType: getTypeType = (value) => {
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else {
        return typeof value;
    }
};