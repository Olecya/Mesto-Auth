import React from "react";

//      props.name   Имя попапа
//      props.title  Заголовок попапа
//      props.buttonText  "Сохранить"
//      props.children разметка инпутов

export const InputForm = (props) => {

    const { name, defaultValue = "", minLength = 2, maxLength = 40, ...rest } = props;

    return (
        <label className="popup__content-form">
            <input
                className={`popup__input popup__input_${name}`}
                id={`popup__${name}`} 
                minLength={minLength}
                maxLength={maxLength}
                {...rest}       
            />
            <span className="popup__input-error" id="popup__input_name-error"></span>
        </label>
    );
}