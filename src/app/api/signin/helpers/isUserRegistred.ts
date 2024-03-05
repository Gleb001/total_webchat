// imports ================================================== //
import { executeQuery } from "@/shared/libs/linkDB";

// types ==================================================== //
type isUserRegistred = (email: string) => Promise<boolean>

// main ===================================================== //
export const isUserRegistred: isUserRegistred = async (email) => {
    
    let hasUser = await executeQuery({
        query: `SELECT * FROM users WHERE email = ?`,
        values: [email]
    });

    return (hasUser.length !== 0);

};