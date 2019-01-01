import React from 'react';
import renderer from 'react-test-renderer';
import ProfileEdit from "components/ProfileEdit";

it('renders correctly when there is no props', () => {
  const tree = renderer.create(<ProfileEdit />).toJSON();
  expect(tree).toMatchSnapshot();
});