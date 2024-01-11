// imports ================================================== //
import { executeQuery } from "@/shared/libs/linkDB";
import type { User } from "@/shared/types/data/user";

// types ==================================================== //
type getUserData = (userId: number) => Promise<User>

// main ===================================================== //
export const getUserData: getUserData = async (userId) => {
    
    let data = await executeQuery({
        query: "SELECT * FROM users WHERE id = ?",
        values: [userId]
    });

    return data[0];

}