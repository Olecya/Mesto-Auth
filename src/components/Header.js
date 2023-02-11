import vector from '../image/Vector.svg';

function Header() {
    return (
        <header className="header">
            <img src={vector} className="header__logo" alt="логотип место Россия" />
            {/* <img src="<%=require('./image/Vector.svg') %>" className="header__logo" alt="логотип место Россия" /> */}
        </header>
    );
}

export default Header;