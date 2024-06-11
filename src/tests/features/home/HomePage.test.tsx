import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import HomePage from '../../../app/features/home/HomePage';
import logo from '../../../assets/logo.svg';

// Mock react-helmet-async before importing your component
vi.mock('react-helmet-async', () => ({
  Helmet: () => null,
}));

describe('HomePage', () => {
  test('renders the App logo', () => {
    render(<HomePage />);

    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument(); // This should now work
    expect(logoElement).toHaveAttribute('src', logo);
    expect(logoElement).toHaveClass('App-logo');
  });
});
