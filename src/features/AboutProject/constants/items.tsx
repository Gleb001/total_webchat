// imports ================================================== //
import InfoAboutProject from "@/entities/InfoAboutProject";
import InfoAboutTeamDevelopment from "@/entities/InfoAboutTeamDevelopment";
import InfoAboutUserAgreement from "@/entities/InfoAboutUserAgreement";
import HintToUse from "@/shared/components/HintToUse";

// types ==================================================== //
interface Item {
    name: string,
    component: JSX.Element
}

// main ===================================================== //
const ITEMS: Item[] = [
    {
        name: "Команда",
        component: <InfoAboutTeamDevelopment />
    },
    {
        name: "О нас",
        component: <InfoAboutProject />
    },
    {
        name: "Правила",
        component: <InfoAboutUserAgreement />
    },
    {
        name: "Подсказки",
        component: (
            <HintToUse
                info={(
                    "Если вы не знаете, что делает кнопка, " +
                    "наведите на неё курсор и подождите 1 " +
                    "секунду — появится подсказка"
                )}
            />
        )
    }
];

// exports ================================================== //
export default ITEMS;