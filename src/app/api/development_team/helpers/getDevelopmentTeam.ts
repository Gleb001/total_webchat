// imports ================================================== //
import type { DevelopmentTeam } from "@/entities/InfoAboutTeamDevelopment/components/DevelopmentTeam/types";
import { executeQuery } from "@/shared/libs/linkDB";

// types ==================================================== //
type getDevelopmentTeam = () => Promise<DevelopmentTeam>

// main ===================================================== //
export const getDevelopmentTeam: getDevelopmentTeam = async () => {
    
    let data = await executeQuery({
        query: "SELECT * FROM development_team"
    });

    if (data[0]) {
        return data;
    } else {
        return null;
    }

}