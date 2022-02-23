import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';

describe('Button"s tests', () => {
	it('Sent only className', () => {
		const tree = renderer
			.create(<Button className='example'></Button>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent only children', () => {
		const tree = renderer.create(<Button>Hello</Button>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent all arguments', () => {
		const tree = renderer
			.create(
				<Button className='example' onClick={() => {}}>
					Hello
				</Button>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Sent nothing', () => {
		const tree = renderer.create(<Button></Button>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
