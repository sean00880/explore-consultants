import Link from 'next/link';
import React from 'react';

const NavLinks = ({ extraClassName }) => {
    return (
        <ul className="navigation ${extraClassName}">
            <li className="current"><Link href="/">Home</Link>
                <ul>
                    <li><Link href="/">Home</Link></li>  
                </ul>
            </li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#projects">Projects</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
        </ul>
    );
};

export default NavLinks;