// types ==================================================== //
type getKeys = <T extends object>(...args: (T)[] | object[]) => (keyof T)[]

// main ===================================================== //
export const getKeys: getKeys = (...objects) => {
    let result: Set<keyof typeof objects[0]> = new Set();
    for (let object of objects) {
        for (let key of Object.keys(object)) {
            result.add(key as keyof object);
        }
    }
    return [...result];
}