import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import { AboutUs  } from './AboutUs';



afterEach(() => {
    cleanup();
});


test('about-us-component-test', () => {
    render(<AboutUs/>);
    const aboutUsElement = screen.getByTestId('about-us-test-id');
    expect(aboutUsElement).toBeInTheDocument();
});
