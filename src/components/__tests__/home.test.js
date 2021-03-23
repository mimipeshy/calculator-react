import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../home';

describe('Home', () => {
  it('Tests if component renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
