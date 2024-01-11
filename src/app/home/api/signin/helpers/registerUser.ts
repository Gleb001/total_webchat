// imports ================================================== //
import { executeQuery } from "@/shared/libs/linkDB";

// types ==================================================== //
type registerUser = (email: string, password: string) => Promise<number>

// main ===================================================== //
export const registerUser: registerUser = async (email, password) => {
    
    const name = "";
    const surname = "";
    const registration_date = new Date();

    const data = await executeQuery({
        query: (
            "INSERT INTO users (name, surname, email, password, registration_date) " +
            "VALUES (?, ?, ?, ?, ?);"
        ),
        values: [name, surname, email, password, registration_date]
    });

    return data.insertId;

}