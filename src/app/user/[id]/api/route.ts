// imports ================================================== //
import { getUserData } from "./helpers/getUserData";
import { getUserId } from "./helpers/getUserId";
import { NextRequest } from "next/server";

// main ===================================================== //
export async function GET(request: NextRequest) {
    try {

        const token = request.cookies.get("token")?.value;

        let userData = {};
        if (token) {
            const userId = getUserId(token);
            if (userId) {
                userData = await getUserData(userId);
            }
        }

        return new Response(
            JSON.stringify(userData)
        );

    } catch (error) {
        return new Response(JSON.stringify({ status: "error", message: error }));
    }
}