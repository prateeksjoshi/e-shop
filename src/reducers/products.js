const initState = [];

function products(state=initState,action){
  switch(action.type){
    case "GET_PRODUCTS":
      return state;
    case "GET_PRODUCTS_SUCCESS":
      //console.log('prod success',action.payload);
      return action.payload;
    case "GET_PRODUCTS_ERROR":
      //console.log('prod error',action.payload);
      return Object.assign({}, state,action.payload);
    default:
     return state;
  }
}

export default products;
