export function addToCart(){
  return {
    type:ADD_TO_CART,
    payload:{
      isSelected:true
    }
  }
}

export function removeFromCart(){
  return {
    type:REMOVE_FROM_CART,
    payload:{
      isSelected:false
    }
  }
}
