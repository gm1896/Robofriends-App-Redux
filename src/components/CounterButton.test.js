import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('expects to checkout Snapshot Testing', () => {
	const mockColor = 'red'
	expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
	const mockColor ='red'
	const wrapper = shallow(<CounterButton color={mockColor}/>);

	wrapper.find('[id="counter"]').simulate('click');
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({count:2});
	expect(wrapper.props().color).toEqual('red');

})