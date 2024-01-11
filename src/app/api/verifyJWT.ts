// imports ================================================== //
import jwt from "jsonwebtoken";

// main ===================================================== //
async function verifyJWT(req: Request) {
    try {

        const { token } = await req.json();
        const JWT_SECRET = String(process.env.JWT_SECRET);

        const isVerify = jwt.verify(token, JWT_SECRET);

        return new Response(
            JSON.stringify({ isVerify })
        );

    } catch (error) {
        return new Response(
            JSON.stringify(
                {
                    status: "error",
                    message: error
                }
            )
        );
    }
}