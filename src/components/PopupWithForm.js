// import React, { useEffect } from "react";

//      props.name   Имя попапа
//      props.title  Заголовок попапа
//      props.buttonText  "Сохранить"
//      props.children разметка инпутов
// 

function PopupWithForm(props) {
    const { name, isOpen, onClose, title, onSubmit, buttonText = "Сохранить", children } = props;

    // useEffect

    return (
        <section className={`popup ${name} ${isOpen && "popup_opened"}`} id={name}>
            <div className="popup__form">
                <button className="popup__close" type="button" aria-label="close popup" onClick={onClose} />
                <h2 className="popup__title">{title}</h2>
                <form className={name} onSubmit={onSubmit}>
                    {children}
                    <button className="popup__button" type="submit" aria-label="save">{buttonText}</button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;