// import =================================================== //
import { Container } from "@/shared/components/Container";

// main ===================================================== //
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    );
}