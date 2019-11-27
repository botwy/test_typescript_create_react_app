import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { IProduct } from './model/product';
import { productsReducer } from './reducers/product';

export interface IProductsState {
    readonly products: IProduct[];
    readonly productsLoading: boolean;
}

export interface IApplicationState {
    products: IProductsState;
}

const rootReducer = combineReducers<IApplicationState>({
    products: productsReducer
});

export function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}
