// imports ================================================== //
import type {FC} from 'react';

// main ===================================================== //
interface Employee {
    id: number,
    name: string,
    account_link: string,
    img_link: string
}
type Staff = Employee[]

// exports ================================================== //
export type { Staff, Employee };