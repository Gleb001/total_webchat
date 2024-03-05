// imports =================================================== //
import Chats from "@/widgets/main/chats";
import Header from "@/shared/components/Header";
import type { ReactNode } from "react";
import ChatsHeader from "@/widgets/header/chats";

// types ===================================================== //
interface Props {
  children: ReactNode
}

// main ====================================================== //
function UserAccountPage({ children }: Props) {

  return (
    <>
      <ChatsHeader />
      <main>
        <Chats />
        {children}
      </main>
    </>
  );

}

// exoprts ================================================== //
export default UserAccountPage;