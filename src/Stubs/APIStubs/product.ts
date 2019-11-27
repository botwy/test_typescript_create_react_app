import { products } from '../ProductData';

const wait = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const getProducts = async () => {
    await wait(1000);
    return products;
};
