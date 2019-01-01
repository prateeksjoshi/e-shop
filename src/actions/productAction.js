import api from '../api/api';

export function productsHasError(bool){
  return{
    type:"PRODUCTS_HAS_ERROR",
    hasError:bool
  };
}

export function productsIsLoading(bool){
  return{
    type:"PRODUCTS_IS_LOADING",
    isLoading:bool
  };
}

export function productsFetchDataSuccess(products){
  return{
    type:"PRODUCTS_FETCH_DATA_SUCCESS",
    products
  };
}

export function updateProduct(id){
    console.log('id2323 = ',id);
  return {
    type:"PRODUCT_IS_SELECTED",
    id
  };
}

export function productsFetchData(url) {
    return (dispatch) => {
        dispatch(productsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(productsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((products) => dispatch(productsFetchDataSuccess(products)))
            .catch(() => dispatch(productsHasError(true)));
    };
}

export function sortProducts(products){
  return (dispatch)=>dispatch(productsFetchDataSuccess(products));
}

export function updateCart(id,product){
    const newProduct = {...product,isSelected:!product.isSelected}
    return (dispatch)=>{
      fetch(api+"/"+id,{
        method:"put",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(newProduct)
      })
      .then(response=>{
        if(response.ok){
          dispatch(updateProduct(id));
        }
      })
  };
}

export function search(val){
  return (dispatch) => {
      dispatch(productsIsLoading(true));
      fetch(api+"?q="+val)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              dispatch(productsIsLoading(false));
              return response;
          })
          .then((response) => response.json())
          .then((products) => dispatch(productsFetchDataSuccess(products)))
          .catch(() => dispatch(productsHasError(true)));
  };
}
