import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignSection = ({ nameSignSection, buttonText, onDataUser, signUp = false }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email, password);
        onDataUser({
            password: password,
            email: email,
        });
    }

    return (
        <section className="registration">
            <h1 className="registration__title">{nameSignSection}</h1>
            <form name="registration-form" className="registration__content" onSubmit={handleSubmit}>
                <label className="registration__content-form">
                    <input type="email"
                        className="registration__input"
                        name="registration__input_email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }} />
                </label>
                <label className="registration__content-form">
                    <input type="text"
                        className="registration__input"
                        name="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }} />
                </label>
                <button className="registration__button" type="submit" aria-label="save">{buttonText}</button>
                {signUp &&
                    <div className="registration__link">
                        <p className="registration__link-text">Уже зарегистрированы?</p>
                        <Link to='/sign-in' className="registration__link-in">Войти</Link>
                    </div>
                }
            </form>
        </section>
    )
}

export default SignSection;