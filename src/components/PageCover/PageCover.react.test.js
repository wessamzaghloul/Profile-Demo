import React from 'react';
import renderer from 'react-test-renderer';
import PageCover from "components/PageCover";

it('renders correctly when there is no src', () => {
  const tree = renderer.create(<PageCover />).toJSON();
  expect(tree).toMatchSnapshot();
});