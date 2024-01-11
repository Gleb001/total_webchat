// main ===================================================== //
export const objects = {
    "object": [
        { age: 18 },
        {},
        new Object(undefined)
    ],
    "array": [
        [ 1, 2, 3 ],
        [],
        new Array(5)
    ],
    "function": [
        function () { return "this is function" },
        function () {},
        () => "this is function",
        () => {}
    ],
};