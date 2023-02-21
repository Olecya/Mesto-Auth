import chernV from '../image/chernV.svg';
import krasnX from '../image/krasnX.svg';

const InfoTooltip = (props) => {
    const { isOpen, onClose, isOk } = props;
    // console.log(isOk);

    return (
        
        <section className={`popup popup-success ${isOpen && "popup_opened"}`}>
            <div className="popup__form popup__form-sign">
                <button className="popup__close" type="button" aria-label="close popup" onClick={onClose} ></button>
                <div className="popup__sign">
                    <img className="popup__sign-image" src={isOk ? chernV : krasnX} alt={isOk ? "черная галочка" : "красный крест"} />
                </div>
                <h2 className="popup__sign-subtitle">
                    {isOk ? `Вы успешно зарегистрировались!` : `Что-то пошло не так! Попробуйте еще раз.`}
                </h2>
            </div>
        </section>
    )
}

export default InfoTooltip;