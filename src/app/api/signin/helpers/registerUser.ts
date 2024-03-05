// imports ================================================== //
import { executeQuery } from "@/shared/libs/linkDB";

// types ==================================================== //
type registerUser = (email: string, password: string) => Promise<number>

// main ===================================================== //
export const registerUser: registerUser = async (email, password) => {
    
    const name = "";
    const registration_date = new Date();

    const data = await executeQuery({
        query: (
            "INSERT INTO users (name, email, password, registration_date) " +
            "VALUES (?, ?, ?, ?);"
        ),
        values: [name, email, password, registration_date]
    });

    console.log(data);

    return data.insertId;

}