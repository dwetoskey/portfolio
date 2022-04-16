// __tests__/Gallery.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Portfolio from '..'
const portfolio = { name: "portfolio", description: "Portraits of people in my life" };


afterEach(cleanup)

describe('Gallery component', () => {

  it('renders', () => {
    render(<Portfolio currentCategory={portfolio} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Portfolio currentCategory={portfolio} />)
    expect(asFragment()).toMatchSnapshot()
  })
});

it('displays text', () => {
  const { getByTestId } = render(<Portfolio currentCategory={portfolio} />)
  expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
})