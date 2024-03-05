// imports ================================================== //
import UserAccountPage from "@/pages/UserAccountPage";
import type { ReactNode } from "react";

// types ==================================================== //
interface Props {
    children: ReactNode
}

// main ===================================================== //
function TemplateUser({ children }: Props) {

    return (
        <UserAccountPage />
    );

};

// exports ================================================== //
export default TemplateUser;
