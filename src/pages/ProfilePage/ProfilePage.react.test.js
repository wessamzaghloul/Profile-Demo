import React from 'react';
import renderer from 'react-test-renderer';
import ProfilePage from "pages/ProfilePage";

it('renders correctly when there is no props', () => {
  const tree = renderer.create(<ProfilePage />).toJSON();
  expect(tree).toMatchSnapshot();
});