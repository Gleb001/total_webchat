// types ==================================================== //
type loginUser = (email: string, password: string) => Promise<
    {
        userId: string,
        token: String
    }
>

// exports ================================================== //
export const loginUser: loginUser = async (email, password) => {

    let response = await fetch(
        "./api/login",
        {
            method: "POST",
            body: JSON.stringify({ email, password })
        }
    );

    return await response.json();

}