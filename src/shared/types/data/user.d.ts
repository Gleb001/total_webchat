interface User {
    id: number,
    name: string,
    surname: string,
    email: string,
    profile_picture_url: string,
    bio: "Мужской" | "Женский" | ""
}

export type { User };