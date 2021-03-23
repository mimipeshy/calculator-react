import React from 'react'
import renderer from 'react-test-renderer'
import Quote from '../error';

describe('Quote', () => {
    it('Tests if component renders correctly', () => {
        const tree = renderer
            .create(<Quote />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});