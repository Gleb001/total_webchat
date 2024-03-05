// imports ================================================== //
import { verifyToken } from "@/shared/libs/jwt_token/verifyToken";
import { NextRequest } from "next/server";

// main ===================================================== //
export async function GET(request: NextRequest) {
    try {

        let userId: number | null = null;

        let data = verifyToken(request);
        if (data?.userId) {
            userId = data.userId;
        }

        return new Response(
            JSON.stringify({ userId })
        );

    } catch (error) {
        return new Response(JSON.stringify({ status: "error", message: error }));
    }
}