import React from 'react';

import './Navbar.scss';



export const Navbar = () => {
    return <div className="navbar-container" data-testid="navbar-test-id">
        <div className="logo">
            <img src="/static/images/default-logo.png" alt="logo" data-testid="navbar-logo-test-id" />
        </div>
    </div>
}
