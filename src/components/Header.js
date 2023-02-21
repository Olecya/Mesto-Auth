import { Link, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import vector from '../image/Vector.svg';

function Header({userOut}) {

    return (
        <header className="header">
            <img src={vector} className="header__logo" alt="логотип место Россия" />
            <div className="header__mail">
                <Routes >
                    <Route path='/cards' element={
                        <>
                            {localStorage.getItem('mail') && <p className="header__mail-address">{localStorage.getItem('mail')}</p>}
                            <button className="header__mail-but" style={{ color: '#A9A9A9' }} onClick={userOut}>Выйти</button>
                        </>}
                    />
                    <Route path='sign-up' element={<Link to='/sign-in' className="header__mail-but">Войти</Link>} />
                    <Route path='sign-in' element={<Link to='/sign-up' className="header__mail-but">Регистрация</Link>} />
                </Routes>
            </div>
        </header>
    );
}

export default Header;