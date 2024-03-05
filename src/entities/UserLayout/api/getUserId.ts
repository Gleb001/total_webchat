// imports ================================================== //
import { User } from "@/shared/types/data/user"

// types ==================================================== //
type UserId = User["id"] | null
type Data = { userId: UserId }
type getUserId = () => Promise<UserId>

// main ===================================================== //
export const getUserId: getUserId = async () => {

    const response = await fetch(`http://localhost:3000/user/api`);

    let data = await response.json() as Data;

    return data.userId;
    
}