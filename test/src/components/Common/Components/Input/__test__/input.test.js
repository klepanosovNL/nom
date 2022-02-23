import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Input } from '../Input';

afterEach(cleanup);

describe('Input"s tests', () => {
	it('Sent only type', () => {
		const tree = renderer.create(<Input type='text'></Input>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent nothing', () => {
		const tree = renderer.create(<Input></Input>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent type and additional props', () => {
		const tree = renderer
			.create(<Input type='text' required className='class-name'></Input>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
