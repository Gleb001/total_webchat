// imports ================================================== //
import type { UserData } from "./types/index";
import styles from "./ui/index.module.css";
import default_profile_picture from "@/shared/ui/images/default_profile_picture.webp";

// main ===================================================== //
const UserData: UserData = (props) => {

    let { id, name, bio, profile_picture_url } = props;

    if (name === "") {
        name = `Идентификатор пользователя: ${id}`;
    }

    return (
        <>
            {
                profile_picture_url ?
                    <img className={styles.profile_picture} src={profile_picture_url} /> :
                    <img className={styles.profile_picture} {...default_profile_picture} />
            }
            <div>
                <h1 className={styles.username}>{name}</h1>
                <p className={styles.bio}>{bio}</p>
            </div>
        </>
    );

};

// exports ================================================== //
export default UserData;
