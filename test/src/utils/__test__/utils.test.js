import {
	formatList,
	toggleDisabledList,
	toggleDisabledItemByName,
	toggleCheckboxStatus,
} from '../utils';

describe('Test utils', () => {
	let list;

	beforeEach(() => {
		list = [
			{
				name: 'dogs',
				description: 'test description',
			},
			{
				name: 'cats',
				description: 'test description1',
				isDisabled: true,
			},
			{
				name: 'air',
				description: 'test description2',
				isDisabled: true,
			},
		];
	});

	it('formatList', () => {
		const expected = [
			{
				name: 'air',
				description: 'test description2',
				isDisabled: true,
			},
			{
				name: 'cats',
				description: 'test description1',
				isDisabled: true,
			},
			{
				name: 'dogs',
				description: 'test description',
			},
		];

		expect(formatList(list)).toEqual(expected);
	});

	it('toggleDisabledList, set TRUE', () => {
		const expected = [
			{
				name: 'dogs',
				description: 'test description',
				isDisabled: true,
			},
			{
				name: 'cats',
				description: 'test description1',
				isDisabled: true,
			},
			{
				name: 'air',
				description: 'test description2',
				isDisabled: true,
			},
		];

		expect(toggleDisabledList(list, true)).toEqual(expected);
	});

	it('toggleDisabledList, set FALSE', () => {
		const expected = [
			{
				name: 'dogs',
				description: 'test description',
				isDisabled: false,
			},
			{
				name: 'cats',
				description: 'test description1',
				isDisabled: false,
			},
			{
				name: 'air',
				description: 'test description2',
				isDisabled: false,
			},
		];

		expect(toggleDisabledList(list, false)).toEqual(expected);
	});

	it('toggleDisabledItemByName', () => {
		const expected = [
			{
				name: 'dogs',
				description: 'test description',
				isDisabled: false,
			},
			{
				name: 'cats',
				description: 'test description1',
				isDisabled: true,
			},
			{
				name: 'air',
				description: 'test description2',
				isDisabled: true,
			},
		];

		expect(toggleDisabledItemByName(list, ['cats', 'air'])).toEqual(expected);
	});

	it('toggleCheckboxStatus', () => {
		const list = [
			{
				name: 'dogs',
				description: 'test description',
				isDisabled: true,
			},
		];

		const expected = [
			{
				name: 'dogs',
				description: 'test description',
				isDisabled: false,
				isCustom: true,
			},
		];

		expect(toggleCheckboxStatus(list, 'dogs')).toEqual(expected);
	});
});
