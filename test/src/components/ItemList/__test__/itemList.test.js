import React from 'react';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import { ItemList } from '../ItemList';

describe('ItemList"s tests', () => {
	beforeEach(() => {
		useSelectorMock.mockClear();
		useDispatchMock.mockClear();
	});

	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
	const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

	it('ItemList"s snapshot: is blocked', () => {
		const tree = renderer.create(<ItemList></ItemList>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
