import { addAllProducts } from "../actions";

function handleResponse(res) {
    if (!res.ok) throw Error(res);
    return res.json();
}

export function getAllProducts() {
    return function (dispatch) {
        fetch('/products')
            .then(handleResponse)
            .then(res => dispatch(addAllProducts(res.response.result)))
            .catch(err => console.log(err));
    }
}