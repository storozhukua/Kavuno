import { render, screen } from '@testing-library/react';
import Header from '../../../components/header/Header'

describe('Header component', () => {
  it('Render Header',  () => {
    render(<Header />);
    expect(screen.getByText(/en/i)).toBeInTheDocument();
    expect(screen.getByText(/ua/i)).toBeInTheDocument();
  });
});