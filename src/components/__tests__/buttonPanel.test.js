import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import ButtonPanel from '../buttonPanel';

test('It returns the correct types of Props', () => {
    expect(ButtonPanel.propTypes.clickHandler).toBe(PropTypes.func.isRequired);

});

test('it correctly renders all components in buttonPanel', () => {
    const { container } = render(<ButtonPanel key="2" name="buttongroup4" clickHandler={() => { }} buttonName="2" />)
    const buttons = container.getElementsByTagName('button');
    expect(buttons.length).toBe(19);
});

test('checks that the buttonPanel has not rendered', () => {
    const buttons = document.getElementsByTagName('button');
    expect(buttons.length).toBe(0);
});