import { act, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('Counter render test case', () => {
    render(<Counter />);
    const countElement = screen.getByText(/Count:/i);
    expect(countElement).toHaveTextContent('Count:10');
});
