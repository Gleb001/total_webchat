// import =================================================== //
import NavLink from '@/shared/components/Nav/components/NavButton';
import Nav from '@/shared/components/Nav';

// main ===================================================== //
export const HomeNav = ({ }) => {

    return (
        <Nav>
            <NavLink href="http://localhost:3000/home/login">
                Войти в аккаунт
            </NavLink>
            <NavLink href="http://localhost:3000/home/about">
                WebChat
                <span className="icon-message"></span>
            </NavLink>
            <NavLink href="http://localhost:3000/home/signin">
                Создать аккаунт
            </NavLink>
        </Nav>
    );
}