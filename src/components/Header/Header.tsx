import React from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

type HeaderProps = {
    links: Array<LinkProps & { label: string }>;
}

const Header: React.FC<HeaderProps> = ({ links }) => {
    return (
        <header className='db-header'>
            <nav>
                {links.map(link => (<NavLink to={link.to}>{link.label}</NavLink>))}
            </nav>
        </header>
    );
};

export default Header;