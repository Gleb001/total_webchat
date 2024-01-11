// imports ================================================== //
import { getType } from "../..";

// types ==================================================== //
type Types = {
    null      ?: (null)[],
    symbol    ?: (symbol)[],
    string    ?: (string)[],
    number    ?: (number)[],
    boolean   ?: (boolean)[],
    function  ?: (() => any)[],
    undefined ?: (undefined)[],
    array     ?: (Array<any>)[],
}
type checkType = (types: Types) => void

// main ===================================================== //
export const checkType: checkType = (types) => {
    for (let type in types) {
        let list_input_values = types[type as keyof typeof types];
        for (let input_value of list_input_values!) {
            expect(getType(input_value)).toBe(type);
        }
    }
};