// imports ================================================== //
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

// types ==================================================== //
interface UserData {
    userId: number
}
type getUserIdByToken = (request: NextRequest) => UserData | null

// main ===================================================== //
const verifyToken: getUserIdByToken = (request) => {

    const token = request.cookies.get("token")?.value;
    const JWT_SECRET = String(process.env.JWT_SECRET);

    let result = null;
    if (token) {
        result = jwt.verify(token, JWT_SECRET) as UserData | null;
    }

    return result ? result : null;

}

// exports ================================================== //
export { verifyToken };