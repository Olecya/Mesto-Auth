import { useContext } from 'react';
import '../blocks/elements/elements.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


export const Card = (props) => {
    const { card, onCardClick, onCardLike, onCardDelete } = props;
    const { likes, link, name, owner, _id } = card;

    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

    const isOwn = owner._id === currentUser._id;
    const isLiked = likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (
        `element__like ${isLiked && 'element__like_aktiv'}`
    );

    // console.log(currentUser);
    return (
        <article className="element">
            {isOwn && <button className="element__trash" aria-label="trash" onClick={() => onCardDelete(card)} />}
            <img className="element__image" src={link} alt={name} onClick={() => onCardClick(props.card)} />
            <div className="element__info">
                <h2 className="element__title">{name}</h2>
                <div className="element__like-box">
                    <button className={cardLikeButtonClassName}
                        type="button"
                        aria-label="like"
                        onClick={() => { onCardLike(card, isLiked ? 'DELETE' : 'PUT') }}
                    ></button>
                    <p className="element__like-number">{likes.length}</p>
                </div>
            </div>
        </article>
    )
}