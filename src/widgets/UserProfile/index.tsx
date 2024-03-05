"use client";

// imports ================================================== //
import { useAppDispatch, useAppSelector } from "@/shared/libs/store/hooks";
import type { Profile } from "./types/index";
import styles from "./ui/index.module.css";
import { useEffect, useState } from "react";
import type { User } from "@/shared/types/data/user";
import UserData from "./components/userData";
import { getUser } from "./api/getUser";

// main ===================================================== //
const Profile: Profile = ({ }) => {

    const userId = useAppSelector((state) => state.user.id);
    const [user, setUser] = useState<User>();

    async function getUserData() {
        if (!userId) return;
        
        const userData = await getUser(userId);
        if (userData) {
            setUser(userData);
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className={styles.profile}>
            {user && <UserData {...user}/>} 
        </div> 
    );

};

// exports ================================================== //
export default Profile;