"use client";

// imports ================================================== //
import { useAppSelector } from "@/shared/libs/store/hooks";
import type { Profile } from "./types/index";
import styles from "./ui/index.module.css";
import { useEffect, useState } from "react";
import type { User } from "@/shared/types/data/user";
import { getUserData } from "./api/getUserData";

// main ===================================================== //
const Profile: Profile = ({ }) => {

    const userId = useAppSelector((state) => state.user.id)!;
    let [user, setUser] = useState<User>();

    async function setUserData() {
        let userData = await getUserData(userId);
        console.log(userData);
        if (userData) {
            setUser(userData);
        }
    }

    useEffect(() => {
        setUserData();
    }, []);

    console.log(user);

    return (
        <>
            {user?.email && <h1>User email: {user.email}</h1>}
            {user?.bio === null && <h1>User bio: {user.bio}</h1>}
            {user?.surname === "" && <h1>User surname: {user.surname}</h1>}
        </>
    );

};

// exports ================================================== //
export default Profile;