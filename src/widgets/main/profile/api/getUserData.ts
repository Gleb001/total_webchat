// imports ================================================== //
import { User } from "@/shared/types/data/user"

// types ==================================================== //
type getUserData = (userId: string) => Promise<User>

// main ===================================================== //
export const getUserData: getUserData = async (userId) => {

    const response = await fetch(`http://localhost:3000/user/${userId}/api`);

    return await response.json();
    
}