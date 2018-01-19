const initialState = {
  "hasError": false,
  "isLoading": false,
  "productList":[]
}

export function products(state=initialState,action){
  switch(action.type){

    case 'PRODUCTS_HAS_ERROR':
        return {...state,hasError:action.hasError};

    case 'PRODUCTS_IS_LOADING':
        return {...state,isLoading:action.isLoading};

    case 'PRODUCTS_FETCH_DATA_SUCCESS':
        return {...state,productList:action.products};

    case 'PRODUCT_IS_SELECTED':
        state.productList.map((product)=>{
          if(product.id===action.id){
            return {...state,isSelected:!product.isSelected}
          }
        })

    default:
      return state;
  }
}
