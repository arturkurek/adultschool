import { useState } from 'react';
import './Navbar.scss';


interface NavbarState {
    opened: boolean;
}


export const Navbar = () => {

    const [ state, setState ] = useState<NavbarState>({
        opened: false
    });

    return <nav className="navbar-container" data-testid="navbar-test-id">
        <div className="logo">
            <img src="/static/images/logo.png" alt="logo" data-testid="navbar-logo-test-id" />
        </div>
        <div className = "hamburger">
            <img src="/static/images/hamburger.svg" alt="hamburger" />
        </div>
    </nav>
}
