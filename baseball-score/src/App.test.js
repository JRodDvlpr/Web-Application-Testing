import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('rtl renders without crashing', () => {
  render (<App />);
});

test('make sure scorecard is 0', () => {
  const { getByTestId, getByText } = render(<App />)
  fireEvent.click(getByText(/hit/i))
  expect(getByTestId('count').innerHTML).toBe('0')
  expect(getByTestId('outs').innerHTML).toBe('0')
  });

test('balls and strikes lebeled correctly', () => {
  const { getByText } = render(<App />);
  getByText(/balls/i);
  getByText(/strikes/i);
})

test('Foul Ball changes strike to 2', () => {
  const { getByTestId, getAllByText, getByText } = render(<App />)
  const foulBtn = getByText(/foul/i)
  const strikeBtn = getAllByText(/strike/i)[1]
  fireEvent.click(strikeBtn)
  fireEvent.click(foulBtn)
  expect(getByTestId('outs').innerHTML).toBe('2')
})