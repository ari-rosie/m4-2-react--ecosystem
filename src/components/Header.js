import { Link } from "react-router-dom";
import React from 'react';

export const Logo = (props) => {
    return (
        <h1>Fruit Emporium</h1>
    );
};

export const Nav = (props) => {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    );
};

export const Header = (props) => {
    return (
        <header>
            <Logo />
            <Nav />
        </header>
    );
};