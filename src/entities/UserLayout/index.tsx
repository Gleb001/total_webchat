"use client";

// imports ================================================== //
import { useAppDispatch } from "@/shared/libs/store/hooks";
import type { UserLayout } from "./types/index";
import { getUserId } from "./api/getUserId";
import { set as setUser } from "@/shared/libs/store/slices/UserSlice";
import { useEffect, useState } from "react";

// main ===================================================== //
const UserLayout: UserLayout = ({ children }) => {

    const dispatch = useAppDispatch();
    let [isUpdate, setIsUpdate] = useState(false);
  
    async function updateUserData() {
        const userId = await getUserId();
        if (userId) {
            dispatch(setUser({ id: userId }));
            setIsUpdate(true);
        }
    }
  
    useEffect(() => {
        updateUserData();
    }, []);

    return (
        <>
            {isUpdate && children}
        </>
    );

};

// exports ================================================== //
export default UserLayout;
