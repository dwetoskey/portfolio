// __tests__/Modal.test.js with hard coded categories
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modals from '..';

const mockToggleModal = jest.fn();
const currentPortfolio = {
  name: 'Mondegreen',
  category: 'portfolio',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
  it('renders', () => {
    render(<Modals
      onClose={mockToggleModal}
      currentPortfolio={currentPortfolio}
    />);
  })

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Modals
      onClose={mockToggleModal}
      currentPortfolio={currentPortfolio}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
})

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modals
      onClose={mockToggleModal}
      currentPortfolio={currentPortfolio}
    />);
    fireEvent.click(getByText('Close'))

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
})  