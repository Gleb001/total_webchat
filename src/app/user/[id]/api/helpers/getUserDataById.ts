// imports ================================================== //
import { executeQuery } from "@/shared/libs/linkDB";
import type { User } from "@/shared/types/data/user";

// types ==================================================== //
type getUserDataById = (userId: User["id"]) => Promise<User>

// main ===================================================== //
export const getUserDataById: getUserDataById = async (userId) => {

    let data = await executeQuery({
        query: "SELECT * FROM users WHERE id = ?",
        values: [userId]
    });

    return data[0];

}