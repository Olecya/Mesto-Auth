import React from "react";

export const ImagePopup = (props) => {

    return (
        <>
            <section className={`popup popup-photo  ${props.card.link && "popup_opened"}`} id="popup-photo">
                <figure className="popup__figure">
                    <button className="popup__close" type="button" aria-label="close popup" onClick={props.onClose}></button>
                    <img className="popup__photo" src={props.card.link} alt={props.card.name} />
                    <figcaption className="popup__subtitle">{props.card.name}</figcaption>
                </figure>
            </section>
        </>
    )
}

