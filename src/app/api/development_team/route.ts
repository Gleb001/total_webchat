// imports ================================================== //
import { getDevelopmentTeam } from "./helpers/getDevelopmentTeam";

// main ===================================================== //
export async function GET() {
    try {

        const development_team = await getDevelopmentTeam();

        return new Response(
            JSON.stringify({ development_team })
        );

    } catch (error) {
        return new Response(JSON.stringify({ status: "error", message: error }));
    }
}