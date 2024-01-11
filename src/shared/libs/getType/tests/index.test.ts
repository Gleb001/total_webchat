// import =================================================== //
import { checkType } from "./helpers/checkType";
import { objects, primitives } from "./constants";

// main ===================================================== //
describe("Testing the getType library", () => {
    test("Getting primitive types", () => {checkType(primitives)});
    test("Getting object types"   , () => {checkType(objects   )});
});