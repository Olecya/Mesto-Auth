import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { InputForm } from './InputForm';

export const AddPlacePopup = (props) => {
    const { isOpen, onClose, onAddPlace } = props;
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        setName('');
        setLink('');
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            name: name,
            link: link
        });
    }

    return (

        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            onAddPlace={onAddPlace}
            name="popup-card"
            title="Новое место"
            buttonText="Создать"
        >
            <InputForm
                name="card_name"
                type="text"
                value={name}
                placeholder="Название"
                onChange={(event) => { setName(event.target.value) }} />
            <InputForm
                name="card_link"
                type="url"
                placeholder="Ссылка на картинку"
                value={link}
                onChange={(event) => { setLink(event.target.value) }}
                maxLength='2084' />
        </PopupWithForm>
    )
}