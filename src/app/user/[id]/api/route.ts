// imports ================================================== //
import { verifyToken } from "@/shared/libs/jwt_token/verifyToken";
import { getUserDataById } from "./helpers/getUserDataById";
import { NextRequest } from "next/server";

// main ===================================================== //
export async function GET(request: NextRequest) {
    try {

        const dataFromToken = verifyToken(request);

        let userData = {};
        if (dataFromToken) {
            const data = await getUserDataById(dataFromToken.userId);
            if (data) {
                userData = data;
            }
        }

        return new Response(
            JSON.stringify(userData)
        );

    } catch (error) {
        return new Response(JSON.stringify({ status: "error", message: error }));
    }
}