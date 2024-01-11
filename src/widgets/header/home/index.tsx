// import =================================================== //
import { Header } from '@/shared/components/Header';
import type { HomeHeader as HomeHeaderType } from "./types/index.d.ts";

// main ===================================================== //
export const HomeHeader: HomeHeaderType = ({ title }) => {
    return (
        <Header title="О проекте">
            {/* <Select defaultValue="Оглавление" data={SELECT_DATA}/> */}
        </Header>
    );
}