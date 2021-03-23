import React from 'react';
import renderer from 'react-test-renderer';
import Error from '../error';

describe('Error', () => {
  it('Tests if component renders correctly', () => {
    const tree = renderer
      .create(<Error />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
