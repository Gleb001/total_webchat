// imports ================================================== //
import createJWT from "@/shared/libs/jwt_token/createJWT";
import { getUserId } from "./helpers/getUserId";
import { cookies } from "next/headers";

// main ===================================================== //
export async function POST(req: Request) {
    try {

        const { email, password } = await req.json();
        const userId = await getUserId(email, password);

        if (userId) {
            const JWT_SECRET = String(process.env.JWT_SECRET);
            const token = createJWT({ userId }, JWT_SECRET);
            cookies().set("token", token);
            cookies().set("gg", "vp");
        }

        return new Response(
            JSON.stringify({ userId })
        );

    } catch (error) {
        return new Response(JSON.stringify({ status: "error", message: error }));
    }
}