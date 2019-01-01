import React from 'react';
import renderer from 'react-test-renderer';
import ProfileMain from "components/ProfileMain";

it('renders correctly when there is no props', () => {
  const tree = renderer.create(<ProfileMain />).toJSON();
  expect(tree).toMatchSnapshot();
});