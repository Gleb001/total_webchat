// imports ================================================== //
import { Staff } from "../types";

// types ==================================================== //
type getDataStaff = () => Promise<Staff | null>

// main ===================================================== //
const getDataStaff: getDataStaff = async () => {
    let response = await fetch("./api/development_team");
    let data = await response.json() as { development_team: Staff | null };
    return data.development_team;
}

// exports ================================================= //
export default getDataStaff;