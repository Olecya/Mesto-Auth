import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm"

export function EditAvatarPopup(props) {

    const { isOpen, onClose, onUpdateAvatar } = props;
    const urlAvatar = useRef(null);

    useEffect(() => {
        urlAvatar.current.value = '';
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();
        console.log(urlAvatar.current.value)
        onUpdateAvatar({
            avatar: urlAvatar.current.value
        });
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            onUpdateAvatar={onUpdateAvatar}
            name="popup-avatar"
            title="Обновить аватар">
            <label className="popup__content-form">
                <input
                    ref={urlAvatar}
                    className={`popup__input popup__input_${`avatar_link`}`}
                    type="url"
                    placeholder="Ссылка на новый аватар"
                />
                <span className="popup__input-error" id="popup__input_name-error"></span>
            </label>
        </PopupWithForm>
    )
}