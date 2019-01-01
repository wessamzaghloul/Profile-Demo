import React from 'react';
import renderer from 'react-test-renderer';
import Autocomplete from "components/Autocomplete";

it('renders correctly when there is no props', () => {
  const tree = renderer.create(<Autocomplete />).toJSON();
  expect(tree).toMatchSnapshot();
});