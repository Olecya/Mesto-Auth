import { apiOptions } from './constants';

class Api {
    constructor(apiOptions) {
        this._baseUrl = apiOptions.baseUrl;
        this._headers = apiOptions.headers;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    postNewCard = (dataCard) => {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: dataCard.name,
                link: dataCard.link
            })
        })
            .then(this._checkResponse);
    }

    deleteCard = (cardId) => {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    toggleLikeCard = (cardId, method) => {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: method,
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    patchProfile(profileJSON) {
        // console.log(profileJSON);
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: profileJSON.name,
                about: profileJSON.about,
            })
        })
            .then(this._checkResponse);
    }

    patchProfileAvatar(avatarUrl) {
        // this._renderLoading(true, battonElement);
        // console.log(avatarUrl);
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarUrl.avatar,
            })
        })
            .then(this._checkResponse);
    }

    _checkResponse = (res) => {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const api = new Api(apiOptions);

export default api;