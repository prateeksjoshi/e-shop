export function productsHasError(bool){
  return{
    type:"PRODUCTS_HAS_ERROR",
    hasError:bool
  }
}

export function productsIsLoading(bool){
  return{
    type:"PRODUCTS_IS_LOADING",
    isLoading:bool
  }
}

export function productsFetchDataSuccess(products){
  return{
    type:"PRODUCTS_FETCH_DATA_SUCCESS",
    products
  }
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
  return (dispatch)=>dispatch(productsFetchDataSuccess(products))
}

export function updateCart(id,product){
    const newProduct = {...product,isSelected:!product.isSelected}
    return (dispatch)=>{
      fetch("http://localhost:3004/products/"+id,{
        method:"put",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(newProduct)
      })
      .then(response=>{
        if(response.ok){
          dispatch(productsFetchData("http://localhost:3004/products"));
        }
      })
  }
}
