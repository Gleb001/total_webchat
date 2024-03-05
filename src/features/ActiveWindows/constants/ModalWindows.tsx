// imports ================================================== //
import ModalWindow from "../components/ModalWindow";

// main ===================================================== //
const MODAL_WINDOWS = {
    "Аккаунт": () => (
        <ModalWindow title="Аккаунт">
            Account user
        </ModalWindow>
    ),
    "Чаты": () => (
        <ModalWindow title="Чаты">
            Chats user
        </ModalWindow>
    ),
    "Статьи": () => (
        <ModalWindow title="Статьи">
            Articles user
        </ModalWindow>
    ),
    "Заметки": () => (
        <ModalWindow title="Заметки">
            Notes user
        </ModalWindow>
    ),
    "Друзья": () => (
        <ModalWindow title="Друзья">
            Friends user
        </ModalWindow>
    ),
    "Настройки": () => (
        <ModalWindow title="Настройки">
            Settings user
        </ModalWindow>
    ),
    "WebChat": () => (
        <ModalWindow title="WebChat">
            Logo user
        </ModalWindow>
    )
};

// exports ================================================= //
export { MODAL_WINDOWS };
export type ModalWindows = typeof MODAL_WINDOWS;