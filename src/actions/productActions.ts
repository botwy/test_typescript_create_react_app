import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IProduct } from '../model/product';
import { ProductsActionTypes } from './actionTypes';
import { getProducts as getProductsFromAPI } from '../Stubs/APIStubs/product';
import { IProductsState } from '../store';

export type ProductsActions =
    | IProductsGetAllAction
    | IProductsLoadingAction;

export interface IProductsGetAllAction {
    type: ProductsActionTypes.GETALL;
    products: IProduct[];
}

export interface IProductsLoadingAction {
    type: ProductsActionTypes.LOADING;
}

const loading: ActionCreator<IProductsLoadingAction> = () => {
    return {
        type: ProductsActionTypes.LOADING
    };
};

export const getProducts: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductsGetAllAction>> = () => {

    return async (dispatch: Dispatch) => {
        dispatch(loading());
        const products = await getProductsFromAPI();

        return dispatch({
            products,
            type: ProductsActionTypes.GETALL
        });
    };
};
