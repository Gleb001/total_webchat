// imports ================================================== //
import BlockInfo from "@/shared/components/BlockInfo";

// main ===================================================== //
const InfoAboutProject = () => {

    return (
        <BlockInfo>
            <h1>О WebChat</h1>
            <p>
                WebChat - это веб-приложение, которое позволяет пользователям общаться
                друг с другом в режиме реального времени. Оно было создано студентом в
                качестве учебного проекта для изучения технологий, используемых при
                создании веб-сайтов и работе социальных сетей.
            </p>
            <p>
                Ознакомиться с кодом проекта можно по ссылке:
                <a href="https://github.com/gleb001/webchat">
                    https://github.com/gleb001/webchat
                </a>.
            </p>
        </BlockInfo>
    );

};

// exports ================================================== //
export default InfoAboutProject;