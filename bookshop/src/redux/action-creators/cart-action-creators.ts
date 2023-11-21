import { ADD_TO_CART, REMOVE_FROM_CART } from "../action-types"
import { ICartItem } from "../../types"

const addToCart = (addedItem: ICartItem) => ({
  type: ADD_TO_CART,
  addedItem
})

const removeFromCart = (removedItem: ICartItem) => ({
  type: REMOVE_FROM_CART,
  removedItem
})

// function* addItemToCart(action: any) {
//   const card: ICardInfo = action.addedItem as ICardInfo
//   yield put(addToCart(card))
// }

// function* watcherCart() {
//   yield takeEvery(ADD_TO_CART, addItemToCart)
// }

export
{
  // watcherCart,
  addToCart,
  removeFromCart,
}
