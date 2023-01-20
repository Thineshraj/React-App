import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders the list items', async () => {
    render(<Async />);
    const listElement = await screen.findAllByRole('listitem');
    expect(listElement).not.toHaveLength(0);
  });
});
