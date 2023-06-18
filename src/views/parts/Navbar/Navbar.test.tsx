import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Navbar } from './Navbar';


afterEach(() => {
    cleanup();
});



test('navbar-component-test', () => {
    render(<Navbar/>);
    const navbarElement = screen.getByTestId('navbar-test-id');
    expect(navbarElement).toBeInTheDocument();
    
    const navbarLogoElement = screen.getByTestId('navbar-logo-test-id');
    expect(navbarLogoElement).toBeInTheDocument();
    expect(navbarLogoElement).toBeTruthy();
    expect(navbarLogoElement).toBeVisible();

    expect(navbarElement).toContainElement(navbarLogoElement);
});
