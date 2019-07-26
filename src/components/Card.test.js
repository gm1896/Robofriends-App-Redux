import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('expects to render Card Component', () => {
	expect(shallow(<Card />).length).toEqual(1)
})

it('expects to checkout Snapshot Testing', () => {
	expect(shallow(<Card />)).toMatchSnapshot();
})