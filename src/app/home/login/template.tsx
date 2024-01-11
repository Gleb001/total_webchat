// import =================================================== //
import { Header } from "@/shared/components/Header";

// main ===================================================== //
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header title="Войти в аккаунт"/>
            <main>{children}</main>
        </>
    );
}