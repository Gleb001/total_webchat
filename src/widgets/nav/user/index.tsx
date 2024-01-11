"use client"

// import =================================================== //
import NavLink from '@/shared/components/Nav/components/NavButton';
import Nav from '@/shared/components/Nav';
import type { UserNav } from "./types";
import { useAppSelector } from '@/shared/libs/store/hooks';

// main ===================================================== //
const UserNav: UserNav = ({ }) => {

    const userId = useAppSelector((state) => state.user.id)!;

    return (
        <Nav>
            <NavLink href={`http://localhost:3000/user/${userId}`}>
                Аккаунт
                <span className="icon-account"></span>
            </NavLink>
            <NavLink href={`http://localhost:3000/user/${userId}/chats`}>
                Чаты
                <span className="icon-message"></span>
            </NavLink>
        </Nav>
    );
}

// exports ================================================== //
export default UserNav;