import { render, screen } from '@testing-library/react';
import Signup from './components/Signup'

test('renders sign up text', () => {
  render(<Signup />);
  const textElement = screen.getByText(/sign up/i);
  expect(textElement).toBeInTheDocument();
});