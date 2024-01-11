// imports ================================================== //
import jwt from "jsonwebtoken";

// types ==================================================== //
interface UserData {
    userId: number
}
type getUserId = (token: string) => number | null

// main ===================================================== //
export const getUserId: getUserId = (token) => {
    
    const JWT_SECRET = String(process.env.JWT_SECRET);
    let result = jwt.verify(token, JWT_SECRET) as UserData | null;

    return result ? result.userId : null;

}