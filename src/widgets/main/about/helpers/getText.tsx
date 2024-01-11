// imports ================================================== //
import { getParagraphs } from "./getParagraphs";
import { getTitle } from "./getTitle";

// types ==================================================== //
interface PartText {
    title?: string, 
    text?: string
}
type getText = (data: PartText[]) => React.ReactNode;

// main ===================================================== //
export const getText: getText = (data) => {

    return (
        data.map(({title, text}) => (
            <>
                {getTitle(title)}
                {getParagraphs(text)}
            </>
        ))
    );

};