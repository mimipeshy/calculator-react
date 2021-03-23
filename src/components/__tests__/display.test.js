import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import Display from '../display';

test("checks for correct type of Props", () => {
    expect(Display.propTypes.amount).toBe(PropTypes.string)
});

test("checks for display of default value", () => {
    const { getByText } = render(<Display amount={undefined} />)
    getByText('0');
})

test("checks if display renders correctly", () => {
    const { getByText } = render(<Display amount="64" />)
    getByText('64')
})