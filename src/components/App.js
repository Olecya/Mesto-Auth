import { useState, useEffect, useCallback } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Card } from './Card';
import api from '../utils/Api';
import PopupWithForm from './PopupWithForm';
import { ImagePopup } from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { EditProfilePopup } from './EditProfilePopup ';
import { EditAvatarPopup } from './EditAvatarPopup';
import { AddPlacePopup } from './AddPlacePopup';

function App() {
    const [currentUser, setCurrentUser] = useState([]);
    const [cards, setCards] = useState([]);

    const [isEditProfilePopupOpen, setIsEditProfileClick] = useState(false);
    const [isAddPlacePopupOpen, setAddPlaceClick] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarClick] = useState(false);
    const [loading, setLoading] = useState(false);

    const [selectedCard, setSelectedCard] = useState({
        card: {
            link: null,
            name: null
        }
    });

    const getUser = useCallback(() => {
        api.getProfile()
            .then((res) => { setCurrentUser(res) })
            .catch((err) => console.log(err))
    }, []);

    useEffect(() => {
        getUser();
    }, []);

    const getCards = useCallback(async () => {
        try {
            setLoading(true);
            const resposne = await api.getInitialCards();
            setCards(resposne);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getCards();
    }, []);

    function closeAllPopups() {
        setEditAvatarClick(false);
        setIsEditProfileClick(false);
        setAddPlaceClick(false);
        setSelectedCard({
            card: {
                link: null,
                name: null
            }
        });
    }

    function handleCardLike(card, method) {
        api.toggleLikeCard(card._id, method)
            .then((newCard) => { setCards((state) => state.map((c) => c._id === card._id ? newCard : c)); })
            .catch((err) => console.log(err));
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => { setCards((cards) => cards.filter((c) => c._id !== card._id)) })
            .catch((err) => console.log(err));;
    }

    function handleAddPlace(card) {
        api.postNewCard(card)
            .then((newCard) => { setCards([newCard, ...cards]) })
            .then(() => closeAllPopups())
            .catch((err) => console.log(err));
    }

    function handleUpdateUser(dataUser) {
        // console.log(dataUser);
        api.patchProfile(dataUser)
            .then((res) => setCurrentUser(res))
            .then(() => closeAllPopups())
            .catch((err) => console.log(err));
    }

    function handleUpdateAvatar(avatarUrl) {
        console.log(avatarUrl);
        api.patchProfileAvatar(avatarUrl)
            .then((res) => setCurrentUser(res))
            .then(() => closeAllPopups())
            .catch((err) => console.log(err));
    }

    return (
        <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
            <div className="page">
                <Header />
                <Main
                    onEditAvatar={() => setEditAvatarClick(true)}
                    onEditProfile={() => setIsEditProfileClick(true)}
                    onAddPlace={() => setAddPlaceClick(true)}
                    children={
                        // {/* <!-- Card --> */}
                        <section className="elements">
                            {loading ? "" :
                                cards.map((card) => (
                                    <Card key={card._id} card={card}
                                        onCardClick={setSelectedCard}
                                        onCardLike={handleCardLike}
                                        onCardDelete={handleCardDelete} />
                                ))}
                        </section>
                    }
                />

                <Footer />
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace} />
                <ImagePopup onClose={closeAllPopups} card={selectedCard} />
                <PopupWithForm name="popup-trash" title="Вы уверены?" buttonText="Да" />
            </div>
        </ CurrentUserContext.Provider>
    );
}

export default App;
