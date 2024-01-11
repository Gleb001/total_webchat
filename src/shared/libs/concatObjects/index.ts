// import =================================================== //
import { getType } from "../getType";
import { concat } from "./helpers/concat";
import { getKeys } from "./helpers/getKeys";
import { hasValue } from "./helpers/hasValue";
import { isObjects } from "./helpers/isObjects";
import type { concatObjectsType } from "./types";

// main ===================================================== //
export const concatObjects: concatObjectsType = (obj_1, obj_2) => {
    if (!isObjects(obj_1, obj_2)) return {} as any;

    let result: object = {};
    for (let key of getKeys(obj_1, obj_2)) {

        let value_1 = obj_1[key];
        let hasValueObj1 = hasValue(value_1);

        let value_2 = obj_2[key];
        let hasValueObj2 = hasValue(value_2);

        if (!hasValueObj1 && !hasValueObj2) {
            break;
        } else if (hasValueObj1 && !hasValueObj2 || !hasValueObj1 && hasValueObj2) {
            // @ts-ignore:
            result[key] = value_1 ? value_1 : value_2;
        } else if (getType(value_1) === getType(value_2)) {
            // @ts-ignore: The type of values matches
            result[key] = concat(value_1, value_2);
        }

    }``

    return result;

};