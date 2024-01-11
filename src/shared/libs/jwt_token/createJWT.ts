// imports ================================================== //
import jwt from "jsonwebtoken";

// types ==================================================== //
interface Data {
    userId: number,
}
type createJWT = (data: Data, secret: string) => string

// main ===================================================== //
const createJWT: createJWT = (data, secret) => {
    const token = jwt.sign(data, secret);
    return token;
}

// exports ================================================== //
export default createJWT;