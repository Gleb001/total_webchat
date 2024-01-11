// import =================================================== //
import { concatObjects } from "..";
import type { Data } from "./types";

// helpers ================================================== //
function checkConcatObjects(data: Data) {
    for (let { input, output } of data) {
        expect(concatObjects(input.obj_1, input.obj_2)).toEqual(output);
    }
}

// main ===================================================== //
describe("Testing the combineValues library", () => {

    describe("Combining objects with a nested primitives", () => {

        test("Combining numeric properties", () => {
            const data = [
                {
                    input: {
                        obj_1: { a: 1 },
                        obj_2: { a: 1 }
                    },
                    output: {
                        a: 2
                    }
                },
                {
                    input: {
                        obj_1: { a: 1 },
                        obj_2: {}
                    },
                    output: {
                        a: 1
                    }
                }
            ];
            checkConcatObjects(data);
        });

        test("Combining string properties", () => {
            const data = [
                {
                    input: {
                        obj_1: { a: "Hello" },
                        obj_2: { a: "World" }
                    },
                    output: {
                        a: "Hello World"
                    }
                },
                {
                    input: {
                        obj_1: { a: "Hello" },
                        obj_2: { a: "" }
                    },
                    output: {
                        a: "Hello"
                    }
                },
                {
                    input: {
                        obj_1: { a: "" },
                        obj_2: { a: "" }
                    },
                    output: {
                        a: ""
                    }
                },
                {
                    input: {
                        obj_1: { a: "Hello" },
                        obj_2: {}
                    },
                    output: {
                        a: "Hello"
                    }
                }
            ];
            checkConcatObjects(data);
        });

        test("Combining boolean properties", () => {
            const data = [
                {
                    input: {
                        obj_1: { a: true },
                        obj_2: { a: false }
                    },
                    output: {
                        a: true
                    }
                },
                {
                    input: {
                        obj_1: { a: false },
                        obj_2: { a: false }
                    },
                    output: {
                        a: false
                    }
                },
                {
                    input: {
                        obj_1: { a: true },
                        obj_2: {}
                    },
                    output: {
                        a: true
                    }
                }
            ];
            checkConcatObjects(data);
        });

        test("Combining undefined properties", () => {
            const data = [
                {
                    input: {
                        obj_1: { a: undefined },
                        obj_2: { a: undefined }
                    },
                    output: {
                        a: undefined
                    }
                },
                {
                    input: {
                        obj_1: { a: undefined },
                        obj_2: {}
                    },
                    output: {
                        a: undefined
                    }
                }
            ];
            checkConcatObjects(data);
        });

        test("Combining null properties", () => {
            const data = [
                {
                    input: {
                        obj_1: { a: null },
                        obj_2: { a: null }
                    },
                    output: {}
                },
                {
                    input: {
                        obj_1: { a: null },
                        obj_2: {}
                    },
                    output: {}
                }
            ];
            checkConcatObjects(data);
        });

        test("Combining symbol properties", () => {
            let a_symbol = Symbol("a");
            let b_symbol = Symbol("b");
            const data = [
                {
                    input: {
                        obj_1: { a: a_symbol },
                        obj_2: { a: b_symbol }
                    },
                    output: {
                        a: a_symbol
                    }
                },
                {
                    input: {
                        obj_1: {             },
                        obj_2: { a: a_symbol }
                    },
                    output: {
                        a: a_symbol
                    }
                }
            ];
            checkConcatObjects(data);
        });

        test("Combining bigint properties", () => {
            const data = [
                {
                    input: {
                        obj_1: { a: BigInt(1) },
                        obj_2: { a: BigInt(1) }
                    },
                    output: {
                        a: BigInt(1) + BigInt(1)
                    }
                },
                {
                    input: {
                        obj_1: { a: BigInt(1) },
                        obj_2: {}
                    },
                    output: {
                        a: BigInt(1)
                    }
                }
            ];
            checkConcatObjects(data);
        });

    });

    describe("Combining objects with a nested objects", () => {

        test("Сombining with object properties", () => {
            const data = [
                {
                    input: {
                        obj_1: { a: 1, b: { b1: 1, c: { c1: 1 } } },
                        obj_2: { a: 1, b: { b1: 1, c: { c1: 1 } } }
                    },
                    output: {
                        a: 2, b: { b1: 2, c: { c1: 2 } }
                    }
                },
                {
                    input: {
                        obj_1: { a: 1, b: { b1: 1, c: { c1: 1 } } },
                        obj_2: { a: 1 }
                    },
                    output: {
                        a: 2, b: { b1: 1, c: { c1: 1 } }
                    }
                }
            ];
            checkConcatObjects(data);
        });

        test("Сombining with array properties", () => {
            const data = [
                {
                    input: {
                        obj_1: { a: 1, b: [1, 2, 3] },
                        obj_2: { a: 1, b: [3, 4, 5] }
                    },
                    output: {
                        a: 2, b: [1, 2, 3, 3, 4, 5]
                    }
                },
                {
                    input: {
                        obj_1: { a: 1, b: [1, 2, 3] },
                        obj_2: { a: 1 }
                    },
                    output: {
                        a: 2, b: [1, 2, 3]
                    }
                }
            ];
            checkConcatObjects(data);
        });

        test("Сombining with function properties", () => {
            let func_1 = () => "obj_1";
            let func_2 = () => "obj_2";
            const data = [
                {
                    input: {
                        obj_1: { a: 1, b: func_1 },
                        obj_2: { a: 1, b: func_2 }
                    },
                    output: {
                        a: 2, b: async () => {
                            func_1();
                            func_2();
                        }
                    }
                },
                {
                    input: {
                        obj_1: { a: 1, b: func_1 },
                        obj_2: { a: 1 }
                    },
                    output: {
                        a: 2, b: func_1
                    }
                }
            ];
            for (let { input, output } of data) {
                expect(concatObjects(input.obj_1, input.obj_2).toString()).toBe(output.toString());
            }
        });

    });

    test("Combining object with a nested mixed primitives and objects", () => {
        const data = [
            {
                input: {
                    obj_1: { a: "Hello" },
                    obj_2: { a: 1       }
                },
                output: {} 
            },
            {
                input: {
                    obj_1: { a: () => "a" },
                    obj_2: { a: [1, 2, 3] }
                },
                output: {}
            },
            {
                input: {
                    obj_1: { a: { a1: 1 } },
                    obj_2: { a: [1, 2, 3] }
                },
                output: {}
            },
            {
                input: {
                    obj_1: { a: 123       },
                    obj_2: { a: [1, 2, 3] }
                },
                output: {}
            },
            {
                input: {
                    obj_1: { a: "123"       },
                    obj_2: { a: [1, 2, 3] }
                },
                output: {}
            }
        ];
        checkConcatObjects(data);
    });

    test("Combining array properties", () => {
        const data = [
            {
                input: {
                    obj_1: [1, 2, 3],
                    obj_2: { a: 1 }
                },
                output: {}
            },
            {
                input: {
                    obj_1: [1, 2, 3],
                    obj_2: [1, 2, 3]
                },
                output: {}
            }
        ];
        checkConcatObjects(data);
    });

    test("Combining empty object", () => {
        const data = [
            {
                input: {
                    obj_1: {},
                    obj_2: {}
                },
                output: {}
            }
        ];
        checkConcatObjects(data);
    });

});