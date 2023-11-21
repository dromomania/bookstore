// import { Container } from "react-bootstrap"


// const CartItem = () => {
//   return (
//     <Container>

//     </Container>
//   )
// }

import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { Container } from "react-bootstrap"
import { ICartItem } from "../../types"
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/action-creators";


const CartItem = (props: ICartItem) => {
  const { quantity, book } = props
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    if (props !== null && props !== undefined)
      dispatch(removeFromCart(props))
  }

  return (
    <Container>
      <section className="h-100 h-custom">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBTable responsive>
                <MDBTableHead>
                  <tr>
                    <th scope="col" className="h5">
                      Shopping Bag
                    </th>
                    <th scope="col"></th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </MDBTableHead>

                <MDBTableBody>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img
                          src={book?.image}
                          // fluid
                          className="rounded-3"
                          style={{ width: "120px" }}
                          alt="Book"
                        />
                        <div className="flex-column ms-4">
                          <p className="mb-2">{book?.title}</p>
                          <p className="mb-0">{book?.authors}</p>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle">
                      <button onClick={handleRemoveFromCart} className="mb-0" style={{ fontWeight: "500", border: "none", background: "none" }}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                    <td className="align-middle">
                      <div className="d-flex flex-row align-items-center">
                        <MDBBtn className="px-2" color="link">
                          {/* <i className="bi bi-dash-lg"></i> */}
                        </MDBBtn>

                        <MDBInput
                          min={0}
                          type="number"
                          size="sm"
                          style={{ width: "50px" }}
                          value={quantity}
                          defaultValue={1}
                        />

                        <MDBBtn className="px-2" color="link">
                          {/* <i className="bi bi-plus-lg"></i> */}
                        </MDBBtn>
                      </div>
                    </td>
                    <td className="align-middle">
                      <p className="mb-0" style={{ fontWeight: "500" }}>
                        {book?.price}
                      </p>
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
            <MDBCard
              className="shadow-2-strong mb-5 mb-lg-0"
              style={{ borderRadius: "16px" }}
            >
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="4" xl="3">
                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">$23.49</p>
                    </div>

                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-0">Shipping</p>
                      <p className="mb-0">$2.99</p>
                    </div>

                    <hr className="my-4" />

                    <div
                      className="d-flex justify-content-between mb-4"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-2">Total (tax included)</p>
                      <p className="mb-2">$26.48</p>
                    </div>

                    <MDBBtn block size="lg">
                      <div className="d-flex justify-content-between">
                        <span>Checkout</span>
                        <span>$26.48</span>
                      </div>
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </section>
    </Container>
  );
}

export { CartItem };
