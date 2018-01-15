export function productsHasError(state=false,action){
  switch(action.type){
    case 'PRODUCTS_HAS_ERROR':
        return action.hasError;
    default:
        return state;
  }
}

export function productsIsLoading(state=false,action){
  switch(action.type){
    case 'PRODUCTS_IS_LOADING':
        return action.isLoading;
    default:
        return state;
  }
}

export function products(state=[],action){
  switch(action.type){
    case 'PRODUCTS_FETCH_DATA_SUCCESS':
        return action.products;
    default:
      return state;
  }
}
