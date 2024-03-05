// imports ================================================== //
import { User } from "@/shared/types/data/user"

// types ==================================================== //
type getUser = (UserId: User["id"]) => Promise<User>

// main ===========s========================================== //
export const getUser: getUser = async (userId) => {

    const response = await fetch(`http://localhost:3000/user/${userId}/api`);

    return await response.json();
    
}