import { ICardInfo } from "../../types"
import { ADD_TO_CART, REMOVE_FROM_CART } from "../action-types"
import { ICartItem } from "../../types"

const initialState = {
  cartItems: [] as ICartItem[],
}

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
      case ADD_TO_CART: {
          return ({
              ...state,
              cartItems: [...state.cartItems, action.addedItem]
          })
      }
      case REMOVE_FROM_CART: {
        return ({
            ...state,
            cartItems: state.cartItems.filter(item => item.book.isbn13 !== action.removedItem.book.isbn13)
        })
      }


      default: {
          return state;
      }
  }
}

export { cartReducer }
