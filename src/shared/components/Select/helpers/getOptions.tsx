// imports ================================================== //
import type { Data } from "../types";

// main ===================================================== //
export default function getOptions(data: Data) {
    return (
        <>{
            data.map(({value, text, isSelected}) => {
                const attributes = {
                    selected: Boolean(isSelected),
                    value
                };
                return (<option {...attributes}>{ text }</option>)
            })
        }</>
    );
}