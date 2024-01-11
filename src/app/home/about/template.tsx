// import =================================================== //
import { Header } from "@/shared/components/Header";

// main ===================================================== //
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header title="О проекте"/>
            <main>{children}</main>
        </>
    );
}