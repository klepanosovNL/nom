import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import React, { cloneElement } from 'react';

const middlewares = [thunk];
export const mockStore = configureStore(middlewares);
// todo: fix types
// export const mockStore = (state, api?): any =>
// 	configureMockStore([thunk.withExtraArgument({ api })])(state);

// export const wrapProvider = (children, store) => (
// 	<Provider store={store}>{children}</Provider>
// );

export function wrapProvider(component, store) {
	return <Provider store={store}>{cloneElement(component)}</Provider>;
}
