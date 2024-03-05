// imports ================================================== //
import "./ui/index.css";
import UserLayout from "@/entities/UserLayout";
import Container from "@/shared/components/Container";
import UserAccount from "@/widgets/UserAccount";

// main ===================================================== //
const UserAccountPage = () => (
    <Container>
        <UserLayout>
            <UserAccount />
        </UserLayout>
    </Container>
);

// exports ================================================== //
export default UserAccountPage;