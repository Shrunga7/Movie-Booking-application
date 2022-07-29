import React from 'react';

import './Header.css';

class Header extends React.Component{
    render () {
        return (
        <div className="head">
        <img src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg" alt="logo"/>
        </div>
        );
    }
}

export default Header;