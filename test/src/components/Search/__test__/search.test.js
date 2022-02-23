import React from 'react';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import { Search } from '../Search';

describe('Search"s tests', () => {
	beforeEach(() => {
		useSelectorMock.mockClear();
		useDispatchMock.mockClear();
	});

	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
	const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

	it('Search"s snapshot', () => {
		const tree = renderer.create(<Search></Search>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
