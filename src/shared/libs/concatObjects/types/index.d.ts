// imports ================================================== //
import type { DeepMergeTwoTypes } from "@/shared/types/deepMergeTwoTypes";

// main ===================================================== //
type concatObjectsType = <Prev, Cur>(prev: Prev & object, cur: Cur & object) => DeepMergeTwoTypes<Prev, Cur>

// export =================================================== //
export type { concatObjectsType };