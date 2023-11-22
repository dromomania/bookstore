import { Container } from "react-bootstrap"
import { CartItem } from "../../components"
import { ICartItem, IStoreState } from "../../types"
import { useSelector } from "react-redux"

const Cart = () => {

  const cartItems = useSelector((state: IStoreState) => state.cart.cartItems)
  const htmlCards = cartItems.map((el: ICartItem) => <CartItem {...el} />)

  return (
    <Container>
      {htmlCards}
    </Container>
  )
}

export { Cart }
