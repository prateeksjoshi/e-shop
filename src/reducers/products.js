const initialState = {
  "hasError": false,
  "isLoading": false,
  "productList":[]
}

export function products(state=initialState,action){
  let newState = {}
  switch(action.type){
    case 'PRODUCTS_HAS_ERROR':
        newState = {...state,hasError:action.hasError};
        return Object.assign({},state,newState);

    case 'PRODUCTS_IS_LOADING':
        newState = {...state,isLoading:action.isLoading};
        return Object.assign({},state,newState);

    case 'PRODUCTS_FETCH_DATA_SUCCESS':
        newState = {...state,productList:action.products};
        return Object.assign({},state,newState);

    case 'PRODUCT_IS_SELECTED':
        const updatedList = state.productList.map((product)=>{
          if(product.id===action.id){
            return {...product,isSelected:!product.isSelected}
          }
          return product;
        })
        newState = {...state,productList:updatedList};
        return Object.assign({},state,newState);

    default:
      return state;
  }
}
