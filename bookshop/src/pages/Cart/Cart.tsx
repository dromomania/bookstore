import { CartItem } from "../../components"
import { ICartItem, IStoreState } from "../../types"
import { useSelector } from "react-redux"

const Cart = () => {

  const cartItems = useSelector((state: IStoreState) => state.cart.cartItems)
  console.log(cartItems)
  const htmlCards = cartItems.map((el: ICartItem) => <CartItem {...el} />)
  //console.log(htmlCards)
  return (
    <>
      {htmlCards}
    </>
  )
}

export { Cart }
