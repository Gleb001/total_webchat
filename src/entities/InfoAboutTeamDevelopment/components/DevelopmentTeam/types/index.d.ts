// imports ================================================== //
import { Staff } from "@/entities/InfoAboutTeamDevelopment/types";
import type { FC } from "react";

// main ===================================================== //
interface Props {
    data: Staff
};
type DevelopmentTeam = FC<Props>

// exports ================================================== //
export type { DevelopmentTeam };