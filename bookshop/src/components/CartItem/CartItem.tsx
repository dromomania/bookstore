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
          </MDBRow>
        </MDBContainer>
      </section>
    </Container>
  );
}

export { CartItem };
