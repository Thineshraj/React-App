import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting', () => {
  test('renders welcome text on the screen', () => {
    render(<Greeting />);
    const text = screen.getByText('welcome', { exact: false });
    expect(text).toBeInTheDocument();
  });

  test('renders "thanks for visiting" when button not clicked', () => {
    render(<Greeting />);
    const text = screen.getByText('thanks for visiting', { exact: false });
    expect(text).toBeInTheDocument();
  });

  test('renders changed when button clicked', () => {
    render(<Greeting />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const text = screen.getByText('Changed', { exact: false });
    expect(text).toBeInTheDocument();
  });

  test('renders not showing "thanks for visiting" when button is clicked', () => {
    render(<Greeting />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    const text = screen.queryByText('thanks for visiting', { exact: false });
    expect(text).toBeNull();
  });
});
