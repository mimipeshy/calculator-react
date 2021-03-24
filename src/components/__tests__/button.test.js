/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import Button from '../button';

test('It returns the correct types of Props', () => {
  expect(Button.propTypes.clickHandler).toBe(PropTypes.func.isRequired);
  expect(Button.propTypes.name).toBe(PropTypes.string.isRequired);
  expect(Button.propTypes.buttonName).toBe(PropTypes.string.isRequired);
});

test('it correctly renders a button', () => {
  const { container } = render(<Button key="2" name="buttongroup4" clickHandler={() => {}} buttonName="2" />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons.length).toBe(1);
});

test('it checks that the button renders the correct value', () => {
  const { container } = render(<Button key="2" name="buttongroup4" clickHandler={() => {}} buttonName="2" />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons[0].textContent).toBe('2');
});
test('checks that the button has not rendered', () => {
  const buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(0);
});
