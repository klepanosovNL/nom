import React from 'react';
import renderer from 'react-test-renderer';
import { Checkbox } from '../Checkbox';

describe('Checkbox"s tests', () => {
	it('Sent only onChange event', () => {
		const tree = renderer
			.create(<Checkbox onChange={() => {}}></Checkbox>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent nothing', () => {
		const tree = renderer.create(<Checkbox></Checkbox>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
