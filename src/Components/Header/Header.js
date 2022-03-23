import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav>
            <div className='nav'>
                <a href="http://" className='brandName'>
                    <img src={Logo} alt="logo_Image"/>
                </a>
                <ul>
                    <li><a href="/order">order</a></li>
                    <li><a href="/order-review">order review</a></li>
                    <li><a href="/order-manage-inventory">manage inventory</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;