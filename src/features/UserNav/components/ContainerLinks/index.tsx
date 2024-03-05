// imports ================================================== //
import BlockLinks from "../BlockLinks";
import type { ContainerLinks } from "./types/index";
import styles from "./ui/index.module.css";

// main ===================================================== //
const ContainerLinks: ContainerLinks = ({ data }) => {

    console.log(data);

    return (
        <div className={styles.container_links}>
            {data.map((item_data) => <BlockLinks data={item_data} />)}
        </div>
    );

};

// exports ================================================== //
export default ContainerLinks;