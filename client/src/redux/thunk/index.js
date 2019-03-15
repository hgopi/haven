import { addLatestProducts, addProducts, getProductDetails } from './../actions';

function handleResponse(res) {
    if (!res.ok) throw Error(res);
    return res.json();
}

export function getLatestProducts() {
    return function (dispatch) {
        fetch('/products/latest')
            .then(handleResponse)
            .then(res => dispatch(addLatestProducts(res.response.result)))
            .catch((err) => console.log(err));
    }
}

export function getAllProducts() {
    return function (dispatch) {
        fetch('/products')
            .then(handleResponse)
            .then(res => dispatch(addProducts(res.response.result)))
            .catch((err) => console.log(err));
    }
}

export function getProductDetailsByName(name) {
    return function (dispatch) {
        fetch(`/products/name/${name}`)
            .then(handleResponse)
            .then(res => dispatch(getProductDetails(res.response.result)))
            .catch((err) => console.log(err));
    }
}