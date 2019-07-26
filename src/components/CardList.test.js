import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expects to checkout Snapshot Testing', () => {
	const mockRobots = [
		{
			id:1,
			name:'John Snow',
			username:'jonjon',
			email:'john@gmail.com'

		}
	]
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})