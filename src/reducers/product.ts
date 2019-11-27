import { Reducer } from 'redux';
import { IProductsState } from '../store';
import { ProductsActionTypes } from '../actions/actionTypes';
import { ProductsActions } from '../actions/productActions';

const initialProductState: IProductsState = {
    products: [],
    productsLoading: false
};

export const productsReducer: Reducer<IProductsState, ProductsActions> = (
    state: IProductsState = initialProductState,
    action
) => {
    switch (action.type) {
        case ProductsActionTypes.LOADING: {
            return {
                ...state,
                productsLoading: true
            };
        }
        case ProductsActionTypes.GETALL: {
            console.log(action.products);
            return {
                ...state,
                products: action.products,
                productsLoading: false
            };
        }
    }

    return state;
};
