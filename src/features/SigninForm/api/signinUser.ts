// types ==================================================== //
type signinUser = (email: string, password: string) => Promise<
    {
        isLogin: boolean,
        userId: number,
        token: string
    }
>

// main ===================================================== //
export const signinUser: signinUser = async (email, password) => {

    let response = await fetch("./api/signin", {
        method: "POST",
        body: JSON.stringify({ email, password })
    });

    return await response.json();

}