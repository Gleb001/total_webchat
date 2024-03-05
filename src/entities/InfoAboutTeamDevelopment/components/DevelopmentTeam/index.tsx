// imports ================================================== //
import type { DevelopmentTeam } from "./types/index";
import styles from "./ui/index.module.css";

// main ===================================================== //
const DevelopmentTeam: DevelopmentTeam = ({ data }) => {

    function getTeam() {
        return data.map((employee) => {
            let { id, name, account_link, img_link } = employee;
            return (
                <a key={id} href={account_link} className={styles.employee}>
                    <img src={img_link} />
                    <div>{name}</div>
                </a>
            )
        });
    }

    return (
        <div className={styles.development_team}>
            {getTeam()}
        </div>
    );

};

// exports ================================================== //
export default DevelopmentTeam;