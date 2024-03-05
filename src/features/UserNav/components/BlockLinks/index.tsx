// imports ================================================== //
import UserNavButton from "../UserNavButton";
import type { BlockLinks } from "./types/index";
import styles from "./ui/index.module.css";

// main ===================================================== //
const BlockLinks: BlockLinks = ({ data }) => {

    return (
        <div className={styles.block_links}>
            {data.map(item_data => <UserNavButton {...item_data} />)}
        </div>
    );

};

// exports ================================================== //
export default BlockLinks;