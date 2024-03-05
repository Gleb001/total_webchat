// imports ================================================== //
import BlockInfo from "@/shared/components/BlockInfo";
import { useEffect, useState } from "react";
import getDataStaff from "./api/getDataStaff";
import Loading from "../loading";
import DevelopmentTeam from "./components/DevelopmentTeam";
import { Staff } from "./types";

// main ===================================================== //
const InfoAboutTeamDevelopment = () => {

    let [staff, setStaff] = useState<Staff>();

    async function setDataStaff() {
        let data = await getDataStaff();
        if (data) setStaff(data);
    }

    useEffect(() => {
        setDataStaff();
    }, []);

    return (
        <BlockInfo>
            <h1>Команда разработки WebChat</h1>
            {staff ? <DevelopmentTeam data={staff} /> : <Loading />}
        </BlockInfo>
    );

};

// exports ================================================== //
export default InfoAboutTeamDevelopment;