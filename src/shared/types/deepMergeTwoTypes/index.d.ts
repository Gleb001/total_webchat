// main ===================================================== //
// https://habr.com/ru/articles/526998/ 
type GetObjDifferentKeys<T, U> = Omit<T, keyof U> & Omit<U, keyof T>
type GetObjSameKeys<T, U> = Omit<T | U, keyof GetObjDifferentKeys<T, U>>

// exports ================================================== //
export type DeepMergeTwoTypes<T, U> =
  [T, U] extends [(infer TItem)[], (infer UItem)[]]
    ? DeepMergeTwoTypes<TItem, UItem>[]
    : [T, U] extends [{ [key: string]: unknown}, { [key: string]: unknown } ]
      ? MergeTwoObjects<T, U>
      : [T, U] extends [
          { [key: string]: unknown } | undefined, 
          { [key: string]: unknown } | undefined 
        ]
        ? MergeTwoObjects<NonNullable<T>, NonNullable<U>> | undefined
          : T | U