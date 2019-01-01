import React from 'react';
import renderer from 'react-test-renderer';
import ProfileView from "components/ProfileView";

it('renders correctly when there is no props', () => {
  const tree = renderer.create(<ProfileView />).toJSON();
  expect(tree).toMatchSnapshot();
});