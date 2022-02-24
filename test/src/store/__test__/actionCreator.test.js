import { setList } from '../actionCreators';

jest.mock('../../api/api', () => ({ items: [] }));

describe('Action creator testing', () => {
	it('setList test', () => {
		const expected = {
			type: 'SET_LIST',
			payload: {
				list: [],
			},
		};

		expect(setList()).toEqual(expected);
	});
});
