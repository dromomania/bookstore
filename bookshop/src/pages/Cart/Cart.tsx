import { Container } from "react-bootstrap"
import { CartItem } from "../../components"
import { ICartItem, IStoreState } from "../../types"
import { useSelector } from "react-redux"
import { MDBBtn, MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit"

const Cart = () => {

  const cartItems = useSelector((state: IStoreState) => state.cart.cartItems)
  const htmlCards = cartItems.map((el: ICartItem) => <CartItem {...el} />)
  const totalSum = cartItems.reduce((acc: number, el: ICartItem) => {
    const price =  parseFloat(el?.book.price.substring(1, el?.book.price.length - 1))
    console.log(el.book.price)
    if (!isNaN(price)) {
      return acc + price
    } else { return acc }
  }, 0)
  return (
    <Container>
      {htmlCards}

      <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="4" xl="3">
                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-0">${totalSum}</p>
                    </div>
                    <hr className="my-4" />
                    <div
                      className="d-flex justify-content-between mb-4"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-2">Total sum</p>
                    </div>
                    <MDBBtn block size="lg">
                      <div className="d-flex justify-content-between gap-2">
                        <span>Buy</span>
                      </div>
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
    </Container>
  )
}

export { Cart }
