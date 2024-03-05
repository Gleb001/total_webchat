// imports ================================================== //
import type { User } from "@/shared/types/data/user";
import type { FC } from "react";

// main ===================================================== //
interface Props extends User {};
type UserData = FC<Props>

// exports ================================================== //
export type { UserData };