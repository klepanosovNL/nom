import { filterByCategory, filterByName } from '../filters';
import { cleanup } from '@testing-library/react';

describe('Filter"s functions', () => {
	afterEach(() => {
		cleanup();
	});

	const list = [
		{
			name: 'dogs',
			description: 'test description',
		},
		{
			name: 'cats',
			description: 'test description1',
			isDisabled: true,
		},
	];
	it('filterByName: item doesnt exist in the list', () => {
		expect(filterByName(list, 'form')).toEqual([]);
	});

	it('filterByName: item exists in the list', () => {
		const expected = [
			{
				name: 'dogs',
				description: 'test description',
			},
		];

		expect(filterByName(list, 'dogs')).toEqual(expected);
	});

	it('filterByCategory: returns allowed list', () => {
		const expected = [
			{
				name: 'dogs',
				description: 'test description',
			},
		];

		expect(filterByCategory(list, 'Allowed')).toEqual(expected);
	});

	it('filterByCategory: returns blocked list', () => {
		const expected = [
			{
				name: 'cats',
				description: 'test description1',
				isDisabled: true,
			},
		];

		expect(filterByCategory(list, 'Blocked')).toEqual(expected);
	});
});
