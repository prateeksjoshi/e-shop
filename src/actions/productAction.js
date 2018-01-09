export function getProducts(dispatch){
  return function(dispatch) {
    return fetch("http://localhost:3004/products").then((response) => {
        dispatch(getProductsSuccess(response.json()));
      });
  }

}

export function getProductsSuccess(resp){
  console.log('show respo',resp);
  return {
    type:"GET_PRODUCTS_SUCCESS",
    payload:resp
  }
}

export function getProductsError(err){
  console.log('show err',err);
  return {
    type:"GET_PRODUCTS_ERROR",
    payload:err
  }
}
