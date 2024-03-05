// imports ================================================== //
import { executeQuery } from "@/shared/libs/linkDB";

// types ==================================================== //
type getUserId = (email: string, password: string) => Promise<number | null>

// main ===================================================== //
export const getUserId: getUserId = async (email, password) => {
    
    let data = await executeQuery({
        query: "SELECT id FROM users WHERE email = ? AND password = ?",
        values: [email, password]
    });

    if (data[0]) {
        return data[0].id;
    } else {
        return null;
    }

}