// import =================================================== //
import { Header } from "@/shared/components/Header";

// main ===================================================== //
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header title="Создать аккаунт"/>
            <main>{children}</main>
        </>
    );
}