import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckoutComponent from './checkoutComponent';

test('can render with defaults', () => {
  const { getByPlaceholderText, getByText } = render(<CheckoutComponent />);
  fireEvent.change(getByPlaceholderText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(getByPlaceholderText(/address/i), { target: { value: '123 Main St' } });
  fireEvent.change(getByPlaceholderText(/city/i), { target: { value: 'New York' } });
  fireEvent.change(getByPlaceholderText(/postal code/i), { target: { value: '10001' } });
  fireEvent.click(getByText(/submit/i));
});