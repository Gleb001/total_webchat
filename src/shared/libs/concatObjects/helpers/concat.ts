// imports =================================================== //
import { concatObjects } from "..";
import { getType } from "../../getType";

// types ==================================================== //
type Concat = <T>(value_1: T, value_2: T) => T | any

// main ===================================================== //
export const concat: Concat = (value_1, value_2) => {

    switch (getType(value_1)) {

        case "object":
            // @ts-ignore: The values are of Object type
            return concatObjects(value_1, value_2);

        case "array":
            // @ts-ignore: The values are of Array type
            return [...value_1, ...value_2];

        case "function":
            // @ts-ignore: The values are of Function type
            return async () => { value_1(); value_2(); };

        case "symbol":
            return value_1;

        case "string":
            // @ts-ignore: The values are of String type
            let hasCharsOrNumbers = /\S/g.test(value_1) && /\S/g.test(value_2)
            let separator = hasCharsOrNumbers ? " " : "";
            return value_1 + separator + value_2;

        case "number":
        case "bigint":
            // @ts-ignore: The values are of Number or BigInt types
            return value_1 + value_2;

        case "boolean":
            // @ts-ignore: The values are of Boolean type
            return value_1 || value_2

        case "undefined":
            return undefined;

        case "null":
            return null;

    }
    
};