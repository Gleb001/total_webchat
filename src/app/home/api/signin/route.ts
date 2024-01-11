// imports ================================================== //
import createJWT from "@/shared/libs/jwt_token/createJWT";
import { isUserRegistred } from "./helpers/isUserRegistred";
import { registerUser } from "./helpers/registerUser";
import { cookies } from "next/headers";

// main ===================================================== //
export async function POST(req: Request) {
    try {

        const { email, password } = await req.json();

        let isLogin = false;
        let userId: null | number = null;
        if (await isUserRegistred(email)) {
            isLogin = true;
        } else {
            userId = await registerUser(email, password);

            const JWT_SECRET = String(process.env.JWT_SECRET);
            const token = createJWT({ userId }, JWT_SECRET);
            cookies().set("token", token);
        }

        return new Response(
            JSON.stringify({ isLogin, userId })
        );

    } catch (error) {
        return new Response(JSON.stringify({ status: "error", message: error }));
    }
}