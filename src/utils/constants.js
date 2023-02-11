// export const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

// export const buttonProfileOpen = document.querySelector('.profile__button-open');
// export const popupIdProfile = document.querySelector('.popupProfile');
// export const popupIdCard = document.querySelector('.popup-card');
// export const popupIdPhoto = document.querySelector('.popup-photo');
// export const buttonCardOpen = document.querySelector('.profile__button');
// export const popapInputProfileName = document.querySelector('.popup__input_profile_name');
// export const popapInputProfileInfo = document.querySelector('.popup__input_profile_info');
// export const elementCardGrid = document.querySelector('.elements');
// export const profileTitle = document.querySelector('.profile__title');
// export const profileSubtitle = document.querySelector('.profile__subtitle');

// export const popupAvatarId = document.querySelector('.popup-avatar');
// export const profileAvatarBox = document.querySelector('.profile__avatar-box');
// export const profileAvatar = profileAvatarBox.querySelector('.profile__avatar');
// export const buttonAvatarSave = document.querySelector('.popup__button_avatar');
// export const popupTrashCard = document.querySelector('.popup-trash');

export const apiOptions =
{
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
    headers:
    {
        authorization: '71aaadd6-02f4-42c8-bb63-514ed8832d4f',
        'Content-Type': 'application/json'
    }
}