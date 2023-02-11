import { useContext, useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { InputForm } from './InputForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export const EditProfilePopup = (props) => {

    const { isOpen, onClose, onUpdateUser } = props;
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');

    useEffect(() => {
        setName(currentUser.name ?? '');
        setAbout(currentUser.about ?? '');
    }, [currentUser, isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name: name,
            about: about
        });
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            onUpdateUser={onUpdateUser}
            name="popupProfile"
            title="Редактировать профиль"
        >
            <InputForm name="profile_name"
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <InputForm name="profile_info"
                type="text"
                defaultValue={currentUser.about}
                placeholder="Вид деятельности"
                value={about}
                onChange={(event) => {
                    setAbout(event.target.value);
                }}
                maxLength='200' />

        </PopupWithForm>
    )
}